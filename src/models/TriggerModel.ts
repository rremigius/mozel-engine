import {GenericMozel, property, required} from 'mozel';
import EventModel from "@/models/EventModel";
import ActionModel from "@/models/ActionModel";
import MappingModel from "@/models/MappingModel";
import ConditionModel from "@/models/ConditionModel";
import BaseComponentModel from "@/BaseComponentModel";
import {ComponentAction, ComponentActionData, ComponentEvent, ComponentEventData} from "mozel-component/dist/Component";

export type UnknownTriggerModel = TriggerModel<ComponentEvent<object>, ComponentAction<object>>;

export default class TriggerModel<E extends ComponentEvent<any>, A extends ComponentAction<any>> extends BaseComponentModel {
	static get type() { return 'Trigger' };

	@property(EventModel, {required})
	event!:EventModel;

	@property(ActionModel, {required})
	action!:ActionModel;

	@property(GenericMozel, {required})
	mapping!:MappingModel<ComponentActionData<A>, ComponentEventData<E>>;

	@property(ConditionModel)
	condition?:ConditionModel<E>
}
