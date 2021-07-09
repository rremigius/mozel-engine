import { Collection } from 'mozel';
import TriggerModel from "@/models/TriggerModel";
import BaseComponentModel from "@/BaseComponentModel";
export default class BehaviourModel extends BaseComponentModel {
    static get type(): string;
    triggers: Collection<TriggerModel<any, any>>;
    getObject(): import("mozel").default | null;
}
