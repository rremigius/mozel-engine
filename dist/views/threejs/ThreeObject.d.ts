import ThreeView from "@/views/threejs/ThreeView";
import ObjectModel from "@/models/ObjectModel";
import Component from "mozel-component/dist/Component";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import ObjectController from "@/controllers/ObjectController";
import Vector3, { SparseVector3 } from "@/views/common/Vector3";
import { ViewClickEvent, ViewRightClickEvent } from "mozel-component/dist/View";
export default class ThreeObject extends ThreeView {
    static Model: typeof ObjectModel;
    model: ObjectModel;
    controller: ObjectController | undefined;
    behaviours: ComponentList<Component>;
    objects: ComponentList<ThreeObject>;
    setPosition(position: Vector3): void;
    onInit(): void;
    applyPosition(position: Vector3 | SparseVector3): void;
    applyScale(scale: number): void;
    onClick(event: ViewClickEvent): void;
    onRightClick(event: ViewRightClickEvent): void;
}
