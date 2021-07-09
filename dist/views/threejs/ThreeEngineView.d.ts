import EngineModel from "@/models/EngineModel";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import { Intersection, Raycaster, Renderer, Vector2, WebGLRenderer } from "three";
import ThreeView from "./ThreeView";
import ThreeCamera from "./ThreeObject/ThreeCamera";
import EngineController from "@/controllers/EngineController";
import View from "mozel-component/dist/View";
import Engine from "../../Engine";
export declare class ThreeClickEvent {
    button: number;
    position: {
        x: number;
        y: number;
    };
    intersects: Intersection[];
    constructor(button: number, position: {
        x: number;
        y: number;
    }, intersects: Intersection[]);
}
export default class ThreeEngineView extends View {
    static Model: typeof EngineModel;
    model: EngineModel;
    camera: ComponentSlot<ThreeCamera>;
    scene: ComponentSlot<ThreeView>;
    renderer: Renderer;
    css3DRenderer: Renderer;
    engine: Engine;
    controller: EngineController | undefined;
    protected mouse: Vector2;
    protected raycaster: Raycaster;
    onInit(): void;
    createRenderer(): WebGLRenderer;
    createCSS3DRenderer(): WebGLRenderer;
    onResize(width: number, height: number): void;
    copyStylesToCSS3D(): void;
    onMount(element: HTMLElement): void;
    onDismount(): void;
    render(): void;
    protected handleMouseMove(event: MouseEvent): void;
    protected handleClick(event: MouseEvent): void;
    protected handleKeyUp(event: KeyboardEvent): void;
}
