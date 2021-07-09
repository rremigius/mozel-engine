import Engine from "@/Engine";
import ComponentFactory from "mozel-component/dist/Component/ComponentFactory";
import ThreeViewFactory from "@/views/threejs/ThreeViewFactory";

export default class PlainEngine extends Engine {
	createComponentFactories(): Record<string, ComponentFactory> {
		const controllerFactory = Engine.createDefaultControllerFactory();
		return {
			controller: controllerFactory,
			view: new ThreeViewFactory(controllerFactory.registry)
		}
	}
}
