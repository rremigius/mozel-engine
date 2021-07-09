import Component, {components} from "mozel-component";
import {ComponentEvent, ComponentEvents} from "mozel-component/dist/Component";
import {schema} from "mozel";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import Vector3 from "@/views/common/Vector3";
import Vector3Model from "@/models/Vector3Model";
import BehaviourController from "@/controllers/BehaviourController";
import ObjectModel from "@/models/ObjectModel";
import Log from "@/log";

const log = Log.instance("object-controller");

export class ClickEvent extends ComponentEvent<{position:{x:number, y:number}}>{}
export class RightClickEvent extends ComponentEvent<{position:{x:number, y:number}}>{}
export class SelectEvent extends ComponentEvent<{}>{}
export class DeselectEvent extends ComponentEvent<{}>{}
export class ObjectControllerEvents extends ComponentEvents {
	click = this.$event(ClickEvent);
	rightClick = this.$event(RightClickEvent);
	select = this.$event(SelectEvent);
	deselect = this.$event(DeselectEvent);
}

export default class ObjectController extends Component {
	static Model = ObjectModel;
	declare model:ObjectModel;

	static Events = ObjectControllerEvents;
	declare events:ObjectControllerEvents;

	@components(schema(ObjectController.Model).behaviours, BehaviourController)
	behaviours!:ComponentList<BehaviourController>;

	@components(schema(ObjectController.Model).triggers, TriggerController)
	triggers!:ComponentList<TriggerController>;

	onInit() {
		super.onInit();

		this.triggers.events.add.on(event => event.component.setDefaultController(this));
		this.triggers.events.remove.on(event => event.component.setDefaultController(undefined));

		this.watch(schema(ObjectController.Model).selected, change => {
			change.newValue ? this.onSelected() : this.onDeselected();
		});
	}

	setPosition(position:Vector3) {
		this.model.position.$setData(position, true);
	}

	select(state:boolean = true) {
		this.model.selected = state;
	}

	click(details:{position:{x:number, y:number}}) {
		log.info(`${this} clicked.`);
		this.select();
		this.events.click.fire(new ClickEvent(this, details));
	}

	rightClick(details:{position:{x:number, y:number}}) {
		log.info(`${this} right-clicked.`);
		this.events.rightClick.fire(new RightClickEvent(this, details));
	}

	onSelected() {
		log.info(`${this} selected.`);
		this.events.select.fire(new SelectEvent(this));
		this.eventBus.$fire(new SelectEvent(this));
	}
	onDeselected() {
		log.info(`${this} deselected.`);
		this.events.deselect.fire(new DeselectEvent(this));
		this.eventBus.$fire(new DeselectEvent(this));
	}

	onDestroy() {
		this.onDeselected();
		super.onDestroy();
	}
}
