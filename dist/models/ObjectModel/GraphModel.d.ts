import ObjectModel from "@/models/ObjectModel";
import GraphLinkModel from "@/models/ObjectModel/GraphModel/GraphLinkModel";
import GraphNodeModel from "@/models/ObjectModel/GraphModel/GraphNodeModel";
import { Collection } from "mozel";
export default class GraphModel extends ObjectModel {
    static get type(): string;
    nodes: Collection<GraphNodeModel>;
    links: Collection<GraphLinkModel>;
}
