import Model from "mozel";
import { ComponentEvent, ComponentEventData } from "mozel-component/dist/Component";
export default class ConditionModel<E extends ComponentEvent<any>> extends Model {
    eval(data: ComponentEventData<E>): boolean;
}
