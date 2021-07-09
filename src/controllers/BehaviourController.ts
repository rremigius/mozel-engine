import Component, {components} from "mozel-component/dist/Component";
import BehaviourModel from "@/models/BehaviourModel";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import {schema} from "mozel";

export default class BehaviourController extends Component {
	static Model = BehaviourModel;
	declare model:BehaviourModel;

	@components(schema(BehaviourModel).triggers, TriggerController)
	triggers!:ComponentList<TriggerController>;

	onInit() {
		super.onInit();
		this.triggers.events.add.on(event => event.component.setDefaultController(this));
		this.triggers.events.remove.on(event => event.component.setDefaultController(undefined));
	}
}
