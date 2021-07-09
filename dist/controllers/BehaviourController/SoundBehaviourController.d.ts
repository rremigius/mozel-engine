import BehaviourController from "@/controllers/BehaviourController";
import SoundBehaviourModel from "@/models/BehaviourModel/SoundBehaviourModel";
import { ComponentAction, ComponentActions } from "mozel-component/dist/Component";
export declare class PlayAction extends ComponentAction<{}> {
}
export declare class PlayActions extends ComponentActions {
    play: import("mozel-component").EventEmitter<PlayAction>;
}
export default class SoundBehaviourController extends BehaviourController {
    static Model: typeof SoundBehaviourModel;
    model: SoundBehaviourModel;
    static Actions: typeof PlayActions;
    actions: PlayActions;
    onInit(): void;
    play(): void;
}
