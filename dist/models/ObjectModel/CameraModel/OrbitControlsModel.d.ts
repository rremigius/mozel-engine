import BehaviourModel from "@/models/BehaviourModel";
export default class OrbitControlsModel extends BehaviourModel {
    static get type(): string;
    static get defaults(): {
        rotateSpeed: number;
        minDistance: number;
        maxDistance: number;
        maxPolarAngle: number;
        enableZoom: boolean;
    };
    rotateSpeed: number;
    minDistance: number;
    maxDistance: number;
    enableZoom: boolean;
    maxPolarAngle: number;
}
