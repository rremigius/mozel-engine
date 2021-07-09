import ObjectController, { ObjectControllerEvents } from "@/controllers/ObjectController";
import Model3DModel from "@/models/ObjectModel/Model3DModel";
import { ComponentEvent } from "mozel-component/dist/Component";
export declare class MeshClickEvent extends ComponentEvent<{
    mesh: string;
}> {
}
export declare class Model3DControllerEvents extends ObjectControllerEvents {
    meshClick: import("mozel-component").EventEmitter<MeshClickEvent>;
}
export default class Model3DController extends ObjectController {
    static Model: typeof Model3DModel;
    model: Model3DModel;
    static Events: typeof Model3DControllerEvents;
    events: Model3DControllerEvents;
    clickMesh(mesh: string): void;
}
