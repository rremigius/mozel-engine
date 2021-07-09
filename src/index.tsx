import LightModel from "@/models/ObjectModel/LightModel";
import Log from "@/log";
import ComponentFactory from "mozel-component/dist/Component/ComponentFactory";
import Engine from "@/Engine";
import ThreeViewFactory from "@/views/threejs/ThreeViewFactory";
import UIFactory from "@/views/ui/UIFactory";
import ReactDOM from 'react-dom';
import App from "@/App";
import SphereModel from "./models/ObjectModel/SphereModel";
import model, {models} from "@/model";
import {ClickToDestroyBehaviour} from "@/ClickToDestroyBehaviour";

const log = Log.instance("index");

console.log(model);

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
const engine = new MyEngine(model);

const container = document.getElementById('engine');
if(!container) throw new Error("No element found with id 'engine'.");

ReactDOM.render(<App engine={engine}/>, container);

(async function() {
	await engine.loading;
	engine.start();

	setTimeout(()=>{
		const sphere = models.registry.byGid<SphereModel>('sphere');
		const vw = models.registry.byGid<LightModel>('vw');

		vw!.objects.add(sphere as SphereModel);
		console.log(model);
		console.log(engine.getRootComponent('view').toTree());
		console.log(engine.getRootComponent('ui').toTree());
	},2000);
})();
