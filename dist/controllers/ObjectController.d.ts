import Component from "mozel-component";
import { ComponentEvent, ComponentEvents } from "mozel-component/dist/Component";
import TriggerController from "@/controllers/TriggerController";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import Vector3 from "@/views/common/Vector3";
import BehaviourController from "@/controllers/BehaviourController";
import ObjectModel from "@/models/ObjectModel";
export declare class ClickEvent extends ComponentEvent<{
    position: {
        x: number;
        y: number;
    };
}> {
}
export declare class RightClickEvent extends ComponentEvent<{
    position: {
        x: number;
        y: number;
    };
}> {
}
export declare class SelectEvent extends ComponentEvent<{}> {
}
export declare class DeselectEvent extends ComponentEvent<{}> {
}
export declare class ObjectControllerEvents extends ComponentEvents {
    click: import("mozel-component").EventEmitter<ClickEvent>;
    rightClick: import("mozel-component").EventEmitter<RightClickEvent>;
    select: import("mozel-component").EventEmitter<SelectEvent>;
    deselect: import("mozel-component").EventEmitter<DeselectEvent>;
}
export default class ObjectController extends Component {
    static Model: typeof ObjectModel;
    model: ObjectModel;
    static Events: typeof ObjectControllerEvents;
    events: ObjectControllerEvents;
    behaviours: ComponentList<BehaviourController>;
    triggers: ComponentList<TriggerController>;
    onInit(): void;
    setPosition(position: Vector3): void;
    select(state?: boolean): void;
    click(details: {
        position: {
            x: number;
            y: number;
        };
    }): void;
    rightClick(details: {
        position: {
            x: number;
            y: number;
        };
    }): void;
    onSelected(): void;
    onDeselected(): void;
    onDestroy(): void;
}
