import BehaviourController from "./controllers/BehaviourController";
import { EventListener } from "mozel-component";
import { ViewClickEvent } from "mozel-component/dist/View";
import Component from "mozel-component/dist/Component";
import BehaviourModel from "./models/BehaviourModel";
export declare class ClickToDestroyBehaviourModel extends BehaviourModel {
    static get type(): string;
}
export declare class ClickToDestroyBehaviour extends BehaviourController {
    static Model: typeof ClickToDestroyBehaviourModel;
    model: ClickToDestroyBehaviourModel;
    parentListener?: EventListener<ViewClickEvent>;
    onSetParent(parent?: Component): void;
}
