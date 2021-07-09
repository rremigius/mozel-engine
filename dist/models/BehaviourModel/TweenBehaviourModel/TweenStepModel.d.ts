import Mozel, { GenericMozel } from "mozel";
export default class TweenStepModel extends Mozel {
    target?: Mozel;
    path?: string;
    to?: GenericMozel;
    duration: number;
    position?: string;
    positionIsRelative: boolean;
    ease: string;
}
