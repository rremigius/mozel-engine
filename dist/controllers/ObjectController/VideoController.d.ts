import ObjectController, { ObjectControllerEvents } from "@/controllers/ObjectController";
import VideoModel from "@/models/ObjectModel/VideoModel";
import { ComponentEvent } from "mozel-component/dist/Component";
export declare class PlayEvent extends ComponentEvent<{}> {
}
export declare class PauseEvent extends ComponentEvent<{}> {
}
export declare class VideoControllerEvents extends ObjectControllerEvents {
    play: import("event-interface-mixin").EventEmitter<PlayEvent>;
    pause: import("event-interface-mixin").EventEmitter<PauseEvent>;
}
export default class VideoController extends ObjectController {
    static Model: typeof VideoModel;
    model: VideoModel;
    static Events: typeof VideoControllerEvents;
    events: VideoControllerEvents;
    onInit(): void;
    play(): void;
    pause(): void;
    stop(): void;
    seek(time: number): void;
    onDisable(): void;
    onEnable(): void;
}
