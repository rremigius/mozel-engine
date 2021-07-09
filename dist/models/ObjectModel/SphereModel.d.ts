import ObjectModel from "../ObjectModel";
export default class SphereModel extends ObjectModel {
    static get type(): string;
    radius: number;
    color: string;
    segments?: number;
}
