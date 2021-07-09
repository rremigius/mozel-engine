import Log from "@/log";
import {forEach, isEmpty, isPlainObject, isString} from 'lodash';
import {schema} from "mozel";
import TriggerModel from "@/models/TriggerModel";
import Component, {component} from "mozel-component";
import {ComponentAction, ComponentEvent} from "mozel-component/dist/Component";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";

const log = Log.instance("trigger-controller");

type UnknownTrigger = TriggerModel<ComponentEvent<object>,ComponentAction<object>>;

const modelSchema = schema(TriggerModel);
export default class TriggerController extends Component {
	static Model = TriggerModel;
	declare model:TriggerModel<any,any>;

	private defaultController?:Component;

	@component(modelSchema.event.source, Component)
	source!:ComponentSlot<Component>;

	@component(modelSchema.action.target, Component)
	target!:ComponentSlot<Component>;

	get triggerModel() {
		return <UnknownTrigger>this.model;
	}

	onInit() {
		super.onInit();

		this.source.init(()=>{
			this.restartListening();
		});

		this.watch(schema(TriggerModel).event.name, ()=> {
			this.restartListening();
		});
	}

	/**
	 * Start listening to a new source.
	 */
	restartListening() {
		if (this.started) {
			this.stopListening();
			this.startListening();
		}
	}

	startListening() {
		const source = this.getSource();
		const events = source ? source.events : this.eventBus;
		const eventName = this.triggerModel.event.name;
		const callback = this.onEvent.bind(this);

		this.listenToEventName(events, eventName, callback);
	}

	setDefaultController(controller?:Component) {
		this.defaultController = controller;
	}

	getEvent() {
		return this.triggerModel.event.name;
	}
	getSource() {
		return this.source.current || this.defaultController;
	}
	getTarget() {
		return this.target.current || this.defaultController;
	}
	getAction() {
		return this.triggerModel.action.name;
	}

	onEvent(event:unknown) {
		if(!(event instanceof ComponentEvent)) {
			throw this.error("Cannot handle non-ControllerEvents", event);
		}
		const data = event.data;
		if(this.triggerModel.condition && !this.triggerModel.condition.eval(data)) {
			log.log("Condition for trigger not met; not calling target action.");
			return;
		}
		this.targetAction(data);
	}

	onEnable() {
		super.onEnable();
		this.startListening();
	}

	onDisable() {
		super.onDisable();
		this.stopListening();
	}

	private targetAction(payload:unknown) {
		if(payload !== undefined && !isPlainObject(payload)) {
			log.error("Action payload should be a plain object.");
			return;
		}
		const target = this.getTarget();
		if(!target) {
			log.error(`No target for action '${this.triggerModel.action.name}'.`);
			return;
		}

		// Get input data for the action
		let input:Record<string, unknown> = {};
		if(this.triggerModel.action.input) {
			input = this.triggerModel.action.input.exportGeneric();
		}

		// Map data from event to action based on mapping
		let mapping = this.triggerModel.mapping.exportGeneric();
		if(isPlainObject(payload)) {
			if(!isEmpty(mapping)) {
				// Map data from source to target
				forEach(mapping, (from:any, to:string) => {
					if(!isString(from)) {
						log.error("Cannot map from non-string.", from);
						return;
					}
					input[to] = (<any>payload)[from];
				});
			}
		}

		target.callAction(this.triggerModel.action.name, input);
	}
}
