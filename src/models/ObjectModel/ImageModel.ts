import ObjectModel from "@/models/ObjectModel";
import {property, required} from "mozel";
import Log from "@/log";
import FileModel from "@/models/FileModel";

export default class ImageModel extends ObjectModel {
	static get type() { return 'Image' };

	@property(Number, {required, default: 1})
	width!:number;

	@property(Number, {required, default: 1})
	height!:number;

	@property(FileModel)
	file?:FileModel;
}
