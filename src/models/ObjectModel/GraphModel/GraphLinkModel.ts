import Model, {alphanumeric, Alphanumeric, GenericMozel, property, reference, required} from "mozel";
import GraphNodeModel from "@/models/ObjectModel/GraphModel/GraphNodeModel";
import {uniqueId} from 'lodash';

export default class GraphLinkModel extends Model {
	static get type() { return 'GraphLink' };

	@property(GenericMozel)
	data?:GenericMozel;

	@property(GraphNodeModel, {reference})
	from?:GraphNodeModel;

	@property(GraphNodeModel, {reference})
	to?:GraphNodeModel;

	@property(String)
	label?:string;

	@property(String)
	color?:string;

	@property(Alphanumeric)
	group?:alphanumeric;

	@property(Number, {required, default: 3})
	size!:number;
}
