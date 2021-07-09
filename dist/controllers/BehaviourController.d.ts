import Component from "mozel-component/dist/Component";
import BehaviourModel from "@/models/BehaviourModel";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
export default class BehaviourController extends Component {
    static Model: typeof BehaviourModel;
    model: BehaviourModel;
    triggers: ComponentList<TriggerController>;
    onInit(): void;
}
