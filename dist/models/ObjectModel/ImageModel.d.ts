import ObjectModel from "@/models/ObjectModel";
import FileModel from "@/models/FileModel";
export default class ImageModel extends ObjectModel {
    static get type(): string;
    width: number;
    height: number;
    file?: FileModel;
}
