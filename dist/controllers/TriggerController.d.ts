import TriggerModel from "@/models/TriggerModel";
import Component from "mozel-component";
import { ComponentAction, ComponentEvent } from "mozel-component/dist/Component";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
declare type UnknownTrigger = TriggerModel<ComponentEvent<object>, ComponentAction<object>>;
export default class TriggerController extends Component {
    static Model: typeof TriggerModel;
    model: TriggerModel<any, any>;
    private defaultController?;
    source: ComponentSlot<Component>;
    target: ComponentSlot<Component>;
    get triggerModel(): UnknownTrigger;
    onInit(): void;
    /**
     * Start listening to a new source.
     */
    restartListening(): void;
    startListening(): void;
    setDefaultController(controller?: Component): void;
    getEvent(): string;
    getSource(): Component | undefined;
    getTarget(): Component | undefined;
    getAction(): string;
    onEvent(event: unknown): void;
    onEnable(): void;
    onDisable(): void;
    private targetAction;
}
export {};
