import Model, { GenericMozel } from "mozel";
import ComponentModel from "@/BaseComponentModel";
export default class ActionModel extends Model {
    static get type(): string;
    name: string;
    target?: ComponentModel;
    input?: GenericMozel;
}
