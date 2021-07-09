import { Collection } from 'mozel';
import BehaviourModel from './BehaviourModel';
import { UnknownTriggerModel } from "@/models/TriggerModel";
import Vector3Model from "@/models/Vector3Model";
import BaseComponentModel from "../BaseComponentModel";
export default class ObjectModel extends BaseComponentModel {
    static get type(): string;
    scale: number;
    position: Vector3Model;
    objects: Collection<ObjectModel>;
    behaviours: Collection<BehaviourModel>;
    triggers: Collection<UnknownTriggerModel>;
    selected?: boolean;
}
