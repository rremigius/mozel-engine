import Mozel, {Collection, collection, property, reference, required} from "mozel";
import SceneModel from "@/models/SceneModel";
import CameraModel from "@/models/ObjectModel/CameraModel";
import ObjectModel from "@/models/ObjectModel";

export default class EngineModel extends Mozel {
	static get type() { return 'Engine' };

	@property(SceneModel, {required})
	scene!:SceneModel;

	@property(CameraModel, {reference})
	camera?:CameraModel;

	@collection(ObjectModel, {reference})
	selection!:Collection<ObjectModel>;
}
