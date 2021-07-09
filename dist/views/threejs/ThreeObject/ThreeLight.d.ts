import { Light } from "three";
import ThreeObject from "../ThreeObject";
import LightModel from "@/models/ObjectModel/LightModel";
import { LightType } from "@/views/common/Light";
export default class ThreeLight extends ThreeObject {
    static Model: typeof LightModel;
    model: LightModel;
    light: Light;
    color: number | string;
    lightType: LightType;
    onInit(): void;
    createLight(type: LightType): Light;
    setType(type: LightType): boolean;
    setColor(color: number | string): boolean;
}
