import Model, { alphanumeric, GenericMozel } from "mozel";
export default class GraphNodeModel extends Model {
    static get type(): string;
    data?: GenericMozel;
    label?: string;
    color?: string;
    size: number;
    group?: alphanumeric;
}
