import ObjectModel from "@/models/ObjectModel";
import File from "@/models/FileModel";
export default class VideoModel extends ObjectModel {
    static get type(): string;
    width: number;
    height: number;
    file?: File;
    playing?: boolean;
    time?: number;
}
