import BehaviourModel from '@/models/BehaviourModel';
import TweenStepModel from "./TweenBehaviourModel/TweenStepModel";
import { Collection } from "mozel";
export default class TweenBehaviourModel extends BehaviourModel {
    static get type(): string;
    repeat?: number;
    repeatDelay?: number;
    yoyo: boolean;
    steps: Collection<TweenStepModel>;
}
