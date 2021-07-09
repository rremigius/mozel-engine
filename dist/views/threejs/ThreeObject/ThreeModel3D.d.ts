import Model3DModel from "@/models/ObjectModel/Model3DModel";
import { Object3D } from "three";
import ThreeObject from "../ThreeObject";
import { ThreeClickEvent } from "@/views/threejs/ThreeEngineView";
import Model3DController from "@/controllers/ObjectController/Model3DController";
export default class ThreeModel3D extends ThreeObject {
    static Model: typeof Model3DModel;
    model: Model3DModel;
    model3D?: Object3D;
    controller: Model3DController;
    onInit(): void;
    onLoad(): Promise<void>;
    onThreeClick(event: ThreeClickEvent): void;
    clear(): void;
    loadModel(): Promise<undefined>;
    loadObjFiles(xrModel3D: Model3DModel): Promise<Object3D>;
    loadCollada(xrModel3D: Model3DModel): Promise<Object3D>;
    loadFbx(xrModel3D: Model3DModel): Promise<Object3D>;
}
