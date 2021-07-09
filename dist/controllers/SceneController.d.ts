import Component from "mozel-component/dist/Component";
import SceneModel from "@/models/SceneModel";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
export default class SceneController extends Component {
    static Model: typeof SceneModel;
    model: SceneModel;
    objects: ComponentList<Component>;
    triggers: ComponentList<TriggerController>;
    onInit(): void;
}
