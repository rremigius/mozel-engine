import { Collection } from "mozel";
import { UnknownTriggerModel } from "./TriggerModel";
import { EngineType } from "@/viewer-settings";
import ObjectModel from "@/models/ObjectModel";
import BaseComponentModel from "../BaseComponentModel";
export default class SceneModel extends BaseComponentModel {
    static get type(): string;
    description: string;
    engine: EngineType;
    marker: string;
    triggers: Collection<UnknownTriggerModel>;
    objects: Collection<ObjectModel>;
}
