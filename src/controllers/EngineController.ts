import EngineModel from "@/models/EngineModel";
import Component, {component, ComponentAction, ComponentActions, ComponentEvent, ComponentEvents, components} from "mozel-component/dist/Component";
import Engine, {KeyboardEvent} from "@/Engine";
import Mozel, {schema} from "mozel";
import SceneController from "@/controllers/SceneController";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import ObjectController, {DeselectEvent, SelectEvent} from "@/controllers/ObjectController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import {includes} from "lodash";
import Log from "@/log";
import ObjectModel from "@/models/ObjectModel";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {CollectionItemAddedEvent, CollectionItemRemovedEvent} from "mozel/dist/Collection";

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

	private selectionAddedListener?:(event:CollectionItemAddedEvent<ObjectModel>)=>void;
	private selectionRemovedListener?:(event:CollectionItemRemovedEvent<ObjectModel>)=>void;

	_engine?:Engine;
	get engine() {
		return this._engine;
	}

	onInit() {
		super.onInit();

		this.watch(schema(EngineModel).scene.objects.$ + '.*.selected', () => {
			this.updateSelection();
		});

		// TODO: Use EventEmitter in Mozel & Collection
		this.selectionAddedListener = (event:CollectionItemAddedEvent<ObjectModel>) => {
			event.data.item.selected = true;
		};
		this.selectionRemovedListener = (event:CollectionItemRemovedEvent<ObjectModel>) => {
			event.data.item.selected = false;
		};
		this.model.selection.on(CollectionItemAddedEvent, this.selectionAddedListener);
		this.model.selection.on(CollectionItemRemovedEvent, this.selectionRemovedListener);

		this.actions.pause.on(() => {
			if(!this.engine) return;
			this.engine.pause();
		});
		this.actions.destroy.on(() => {
			if(!this.engine) return;
			this.engine.destroy();
		});
	}

	onDestroy() {
		super.onDestroy();
		if(this.selectionAddedListener) this.model.selection.off(CollectionItemAddedEvent, this.selectionAddedListener);
		if(this.selectionRemovedListener) this.model.selection.off(CollectionItemRemovedEvent, this.selectionRemovedListener);
	}

	updateSelection() {
		const selection = this.model.scene.objects.filter(model => model.selected === true);
		this.model.selection.setData(selection);
		log.log("Current selection: ", this.model.selection.toArray());
	}

	setSelection(selection:ObjectModel[]) {
		// Deselect current
		this.model.selection
			.filter(model => !selection.find(m => m === model))
			.forEach(model => model.selected = false);

		// Select new
		selection.forEach(model => model.selected = true);
	}
}
