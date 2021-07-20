import Log from "@/log";
import ComponentFactory from "mozel-component/dist/Component/ComponentFactory";
import Engine from "@/Engine";
import ThreeViewFactory from "@/views/threejs/ThreeViewFactory";
import UIFactory from "@/views/ui/UIFactory";
import ReactDOM from 'react-dom';
import App from "@/App";
import {ClickToDestroyBehaviour} from "@/ClickToDestroyBehaviour";
import EngineModel from "@/models/EngineModel";
import MozelSyncClient from "mozel-sync/dist/MozelSyncClient";
import EngineModelFactory from "@/models/EngineModelFactory";

const log = Log.instance("index");

const models = new EngineModelFactory();
const model = models.create(EngineModel, {gid: 'engine'});
log.log(model);

const client = new MozelSyncClient({model});

class MyEngine extends Engine {
	createComponentFactories(): Record<string, ComponentFactory> {
		const controllerFactory = Engine.createDefaultControllerFactory();
		controllerFactory.register(ClickToDestroyBehaviour);

		const viewFactory = new ThreeViewFactory();
		viewFactory.setControllerRegistry(controllerFactory.registry);

		const uiFactory = new UIFactory();
		uiFactory.setControllerRegistry(controllerFactory.registry);

		return {
			controller: controllerFactory,
			view: viewFactory,
			ui: uiFactory
		}
	}
}

(async function() {
	await client.start(); // load model from server

	const container = document.getElementById('engine');
	if(!container) throw new Error("No element found with id 'engine'.");

	const engine = new MyEngine(model);
	ReactDOM.render(<App engine={engine}/>, container);
	await engine.loading;
	engine.start();
})();
