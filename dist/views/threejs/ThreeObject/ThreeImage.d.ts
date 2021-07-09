import { Mesh } from "three";
import ImageModel from "@/models/ObjectModel/ImageModel";
import ThreeObject from "../ThreeObject";
export default class ThreeImage extends ThreeObject {
    static Model: typeof ImageModel;
    model: ImageModel;
    mesh?: Mesh;
    onInit(): void;
    clear(): void;
    onLoad(): Promise<void>;
    loadImage(url: string): Promise<void>;
}
