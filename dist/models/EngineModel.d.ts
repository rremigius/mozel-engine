import Mozel, { Collection } from "mozel";
import SceneModel from "@/models/SceneModel";
import CameraModel from "@/models/ObjectModel/CameraModel";
import ObjectModel from "@/models/ObjectModel";
export default class EngineModel extends Mozel {
    static get type(): string;
    scene: SceneModel;
    camera?: CameraModel;
    selection: Collection<ObjectModel>;
}
