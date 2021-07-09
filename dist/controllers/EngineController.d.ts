import EngineModel from "@/models/EngineModel";
import Component, { ComponentAction, ComponentActions, ComponentEvent, ComponentEvents } from "mozel-component/dist/Component";
import Engine, { KeyboardEvent } from "@/Engine";
import SceneController from "@/controllers/SceneController";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import ObjectController from "@/controllers/ObjectController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
export declare class EnginePauseAction extends ComponentAction<{}> {
}
export declare class EngineDestroyAction extends ComponentAction<{}> {
}
export declare class SelectionEvent extends ComponentEvent<{
    selection: ObjectController[];
    oldSelection: ObjectController[];
}> {
}
export declare class EngineEvents extends ComponentEvents {
    selection: import("mozel-component").EventEmitter<SelectionEvent>;
    keyUp: import("mozel-component").EventEmitter<KeyboardEvent>;
}
export declare class EngineActions extends ComponentActions {
    pause: import("mozel-component").EventEmitter<EnginePauseAction>;
    destroy: import("mozel-component").EventEmitter<EngineDestroyAction>;
}
export default class EngineController extends Component {
    static Model: typeof EngineModel;
    model: EngineModel;
    static Events: typeof EngineEvents;
    events: EngineEvents;
    static Actions: typeof EngineActions;
    actions: EngineActions;
    sceneController: ComponentSlot<SceneController>;
    selection: ComponentList<ObjectController>;
    _engine?: Engine;
    get engine(): Engine | undefined;
    onInit(): void;
    setSelection(objects: ObjectController[]): void;
    notifySelection(oldSelection: ObjectController[]): void;
}
