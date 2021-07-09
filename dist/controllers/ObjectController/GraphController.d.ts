import GraphModel from "@/models/ObjectModel/GraphModel";
import ObjectController from "@/controllers/ObjectController";
export default class GraphController extends ObjectController {
    static Model: typeof GraphModel;
    model: GraphModel;
}
