import EngineModel from "@/models/EngineModel";
import Component, {component, ComponentAction, ComponentActions, ComponentEvent, ComponentEvents, components} from "mozel-component/dist/Component";
import Engine, {KeyboardEvent} from "@/Engine";
import {schema} from "mozel";
import SceneController from "@/controllers/SceneController";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import ObjectController, {DeselectEvent, SelectEvent} from "@/controllers/ObjectController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import {includes} from "lodash";
import Log from "@/log";

const log = Log.instance("engine-controller");

export class EnginePauseAction extends ComponentAction<{}> {}
export class EngineDestroyAction extends ComponentAction<{}> {}
export class SelectionEvent extends ComponentEvent<{selection:ObjectController[], oldSelection:ObjectController[]}> {}

export class EngineEvents extends ComponentEvents {
	selection = this.$event(SelectionEvent);
	keyUp = this.$event(KeyboardEvent);
}
export class EngineActions extends ComponentActions {
	pause = this.$action(EnginePauseAction);
	destroy = this.$action(EngineDestroyAction);
}

export default class EngineController extends Component {
	static Model = EngineModel;
	declare model:EngineModel;

	static Events = EngineEvents;
	declare events:EngineEvents;

	static Actions = EngineActions;
	declare actions:EngineActions;

	@component(schema(EngineModel).scene, SceneController)
	sceneController!:ComponentSlot<SceneController>;

	@components(schema(EngineModel).selection, ObjectController)
	selection!:ComponentList<ObjectController>;

	_engine?:Engine;
	get engine() {
		return this._engine;
	}

	onInit() {
		super.onInit();
		this.eventBus.$on(SelectEvent, event => {
			if(event.origin instanceof ObjectController) {
				// Replaces other selections
				this.setSelection([event.origin]);
			}
		});
		this.eventBus.$on(DeselectEvent, event => {
			if(event.origin instanceof ObjectController) {
				const oldSelection = this.selection.current;
				this.selection.remove(event.origin);
				this.notifySelection(oldSelection);
			}
		});
		this.actions.pause.on(() => {
			if(!this.engine) return;
			this.engine.pause();
		});
		this.actions.destroy.on(() => {
			if(!this.engine) return;
			this.engine.destroy();
		});
	}

	setSelection(objects:ObjectController[]) {
		const oldSelection = this.selection.current;
		// Deselect others
		this.selection
			.filter(object => !includes(objects, object)) // only if they are not in the new selection
			.forEach(object => object.select(false));

		// Select new
		for(let object of objects) {
			object.select(); // if already set to true, will not fire any changes
			this.selection.add(object);
		}

		this.notifySelection(oldSelection);
	}

	notifySelection(oldSelection:ObjectController[]) {
		const selection = this.selection.current;
		log.info(`Current selection: `, selection);
		this.events.selection.fire(new SelectionEvent(this, {selection, oldSelection}))
	}
}
