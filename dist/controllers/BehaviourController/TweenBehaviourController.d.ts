import BehaviourController from "@/controllers/BehaviourController";
import TweenBehaviourModel from "@/models/BehaviourModel/TweenBehaviourModel";
import { ComponentEvent, ComponentEvents } from "mozel-component/dist/Component";
import TweenStepModel from "@/models/BehaviourModel/TweenBehaviourModel/TweenStepModel";
import { TimelineMax, TweenLite } from "gsap";
declare class TweenStartedEvent extends ComponentEvent<object> {
}
declare class TweenCompletedEvent extends ComponentEvent<object> {
}
declare class TweenBehaviourControllerEvents extends ComponentEvents {
    started: import("event-interface-mixin").EventEmitter<TweenStartedEvent>;
    completed: import("event-interface-mixin").EventEmitter<TweenCompletedEvent>;
}
export default class TweenBehaviourController extends BehaviourController {
    static Model: typeof TweenBehaviourModel;
    model: TweenBehaviourModel;
    static Events: typeof TweenBehaviourControllerEvents;
    events: TweenBehaviourControllerEvents;
    timeline: TimelineMax;
    get tweenBehaviour(): TweenBehaviourModel;
    onInit(): void;
    initTimeline(): void;
    createTween(step: TweenStepModel): TweenLite;
    startTween(): void;
    onEnable(): void;
    onDisable(): void;
    _animationComplete(): void;
}
export {};
