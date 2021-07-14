import EngineModel from "@/models/EngineModel";
import ComponentFactory from "mozel-component/dist/Component/ComponentFactory";
import EngineControllerFactory from "@/controllers/EngineControllerFactory";
import Component from "mozel-component/dist/Component";
import EventInterface from "event-interface-mixin";
export declare class FrameEvent {
    timestamp: number;
    constructor(timestamp: number);
}
export declare class KeyboardEvent {
    key: string;
    constructor(key: string);
}
export declare class EngineEvents extends EventInterface {
    frame: import("event-interface-mixin").EventEmitter<FrameEvent>;
    keyUp: import("event-interface-mixin").EventEmitter<KeyboardEvent>;
}
export default class Engine {
    static createDefaultControllerFactory(): EngineControllerFactory;
    private _container?;
    get container(): HTMLElement | undefined;
    private readonly _onResize;
    protected started: boolean;
    protected running: boolean;
    protected readonly rootComponents: Record<string, Component>;
    readonly loading?: Promise<unknown>;
    private loaded;
    protected _events: EngineEvents;
    get events(): EngineEvents;
    constructor(model: EngineModel);
    init(): void;
    createComponentFactories(): Record<string, ComponentFactory>;
    get static(): typeof Engine;
    attach(container: HTMLElement | Record<string, HTMLElement>): void;
    detach(): void;
    getRootComponent(name: string): Component;
    private animate;
    /**
     * Updates the state of the Scene. Called every animation frame. Override for control over the update loop.
     * Calls all frame listeners to do their thing
     */
    frame(): void;
    onResize(): void;
    load(): Promise<void[]>;
    get isLoaded(): boolean;
    get isRunning(): boolean;
    get isStarted(): boolean;
    keyUp(key: string): void;
    start(): void;
    resume(): void;
    pause(): void;
    destroy(): void;
}
