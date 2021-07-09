import ThreeView from "@/views/threejs/ThreeView";
import ObjectModel from "@/models/ObjectModel";
import Component, {components} from "mozel-component/dist/Component";
import {deep, schema} from "mozel";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import ObjectController from "@/controllers/ObjectController";
import Vector3, {applySparseVector, SparseVector3} from "@/views/common/Vector3";
import {ViewClickEvent, ViewRightClickEvent} from "mozel-component/dist/View";

export default class ThreeObject extends ThreeView {
	static Model = ObjectModel;
	declare model:ObjectModel;
	declare controller:ObjectController|undefined;

	@components(schema(ObjectModel).behaviours, Component)
	behaviours!:ComponentList<Component>;

	@components(schema(ThreeObject.Model).objects, ThreeObject)
	objects!:ComponentList<ThreeObject>;

	setPosition(position:Vector3) {
		if(!this.controller) return;
		this.controller.setPosition(position);
	}

	onInit() {
		super.onInit();
		this.controller = this.findController(ObjectController);

		this.watch(schema(ObjectModel).position, change => {
			this.applyPosition(change.newValue);
		}, {debounce:0, deep});

		this.watch(schema(ObjectModel).scale, change => {
			this.applyScale(change.newValue);
		});
	}

	applyPosition(position: Vector3 | SparseVector3) {
		if(position instanceof Vector3) {
			this.object3D.position.set(position.x, position.y, position.z);
		} else {
			applySparseVector(this.object3D.position, position);
		}
	}

	applyScale(scale:number) {
		this.object3D.scale.set(scale, scale, scale);
	}

	onClick(event: ViewClickEvent) {
		super.onClick(event);
		if(this.controller) this.controller.click({position: event.data.position});
	}

	onRightClick(event: ViewRightClickEvent) {
		super.onRightClick(event);
		if(this.controller) this.controller.rightClick({position: event.data.position});
	}
}
