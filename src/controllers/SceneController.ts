import Component, {components} from "mozel-component/dist/Component";
import SceneModel from "@/models/SceneModel";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import {schema} from "mozel";
import ObjectController from "@/controllers/ObjectController";

export default class SceneController extends Component {
	static Model = SceneModel;
	declare model:SceneModel;

	@components(schema(SceneController.Model).objects, ObjectController)
	objects!:ComponentList<Component>; // more generic because we cannot override the type

	@components(schema(SceneController.Model).triggers, TriggerController)
	triggers!:ComponentList<TriggerController>;

	onInit() {
		super.onInit();

		this.triggers.events.add.on(event => event.component.setDefaultController(this));
		this.triggers.events.remove.on(event => event.component.setDefaultController(undefined));
	}
}
