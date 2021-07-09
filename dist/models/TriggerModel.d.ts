import EventModel from "@/models/EventModel";
import ActionModel from "@/models/ActionModel";
import MappingModel from "@/models/MappingModel";
import ConditionModel from "@/models/ConditionModel";
import BaseComponentModel from "@/BaseComponentModel";
import { ComponentAction, ComponentActionData, ComponentEvent, ComponentEventData } from "mozel-component/dist/Component";
export declare type UnknownTriggerModel = TriggerModel<ComponentEvent<object>, ComponentAction<object>>;
export default class TriggerModel<E extends ComponentEvent<any>, A extends ComponentAction<any>> extends BaseComponentModel {
    static get type(): string;
    event: EventModel;
    action: ActionModel;
    mapping: MappingModel<ComponentActionData<A>, ComponentEventData<E>>;
    condition?: ConditionModel<E>;
}
