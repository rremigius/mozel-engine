import Model from "mozel";
import ComponentModel from "@/BaseComponentModel";
export default class EventModel extends Model {
    static get type(): string;
    source?: ComponentModel;
    name: string;
}
