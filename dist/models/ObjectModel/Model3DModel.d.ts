import ObjectModel from "@/models/ObjectModel";
import { Collection } from "mozel";
import FileModel from "@/models/FileModel";
export declare enum FileType {
    Collada = "collada",
    Obj = "obj",
    Fbx = "fbx"
}
export default class Model3DModel extends ObjectModel {
    static get type(): string;
    files: Collection<FileModel>;
    clickableMeshes: Collection<string>;
    /**
     * Determine the file type from the files
     */
    determineFileType(): FileType | undefined;
    get mainFile(): FileModel | undefined;
}
