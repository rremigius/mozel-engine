import {Scene} from "three";
import SceneModel from "@/models/SceneModel";
import ThreeView, {root} from "@/views/threejs/ThreeView";
import {components} from "mozel-component/dist/Component";
import {schema} from "mozel";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import ThreeObject from "./ThreeObject";

const RootScene = root(Scene);
export default class ThreeScene extends ThreeView {
	static Model = SceneModel;
	declare model:SceneModel;

	@components(schema(ThreeScene.Model).objects, ThreeObject)
	objects!:ComponentList<ThreeObject>

	createObject3D() {
		return new RootScene();
	}
}
