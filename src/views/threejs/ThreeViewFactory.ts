import ThreeView from "./ThreeView";
import ThreeScene from "./ThreeScene";
import ThreeGraph from "./ThreeObject/ThreeGraph";
import ThreeLight from "./ThreeObject/ThreeLight";
import ThreePerspectiveCamera from "./ThreeObject/ThreePerspectiveCamera";
import ThreeVideo from "./ThreeObject/ThreeVideo";
import ViewFactory from "mozel-component/dist/View/ViewFactory";
import ThreeModel3D from "@/views/threejs/ThreeObject/ThreeModel3D";
import ThreeEngineView from "@/views/threejs/ThreeEngineView";
import ThreeOrbitControls from "@/views/threejs/ThreeObject/ThreeCamera/ThreeOrbitControls";
import ThreeImage from "@/views/threejs/ThreeObject/ThreeImage";
import ThreeSphere from "./ThreeObject/ThreeSphere";

export default class ThreeViewFactory extends ViewFactory {
	initDependencies() {
		super.initDependencies();
		this.register([
			ThreeEngineView, ThreeView, ThreeScene, ThreeGraph, ThreeLight, ThreeModel3D, ThreeImage, ThreePerspectiveCamera,
			ThreeVideo, ThreeOrbitControls, ThreeSphere
		]);
		this.registerDefault(ThreeVideo, ThreeView);
	}
}
