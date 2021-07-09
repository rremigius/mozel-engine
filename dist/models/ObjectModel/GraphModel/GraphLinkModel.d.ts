import Model, { alphanumeric, GenericMozel } from "mozel";
import GraphNodeModel from "@/models/ObjectModel/GraphModel/GraphNodeModel";
export default class GraphLinkModel extends Model {
    static get type(): string;
    data?: GenericMozel;
    from?: GraphNodeModel;
    to?: GraphNodeModel;
    label?: string;
    color?: string;
    group?: alphanumeric;
    size: number;
}
