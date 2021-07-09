import EngineController from "./EngineController";
import SceneController from "./SceneController";
import Model3DController from "./ObjectController/Model3DController";
import ImageController from "./ObjectController/ImageController";
import GraphController from "./ObjectController/GraphController";
import VideoController from "./ObjectController/VideoController";
import TweenBehaviourController from "./BehaviourController/TweenBehaviourController";
import SoundBehaviourController from "./BehaviourController/SoundBehaviourController";
import BehaviourController from "./BehaviourController";
import TriggerController from "./TriggerController";
import ObjectController from "./ObjectController";
import ComponentFactory from "mozel-component/dist/Component/ComponentFactory";

export default class EngineControllerFactory extends ComponentFactory {
	initDependencies() {
		super.initDependencies();
		this.register([
			EngineController, SceneController, Model3DController, ImageController,
			GraphController, VideoController, BehaviourController, TweenBehaviourController, SoundBehaviourController,
			TriggerController, ObjectController
		])
	}
}
