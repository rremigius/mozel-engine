import ThreeCamera from "../ThreeCamera";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import OrbitControlsModel from "@/models/ObjectModel/CameraModel/OrbitControlsModel";
import Component from "mozel-component/dist/Component";
import ThreeEngineView from "@/views/threejs/ThreeEngineView";
import Log from "@/log";
import {immediate, schema} from "mozel";

const log = Log.instance("view/three/camera/orbit-controls");

export default class ThreeOrbitControls extends Component {
	static Model = OrbitControlsModel;
	declare model:OrbitControlsModel;
	controls?:OrbitControls;

	onInit() {
		super.onInit();

		const s = schema(OrbitControlsModel);
		this.watch(s.rotateSpeed, change => this.setRotateSpeed(change.newValue), {immediate});
		this.watch(s.maxPolarAngle, change => this.setMaxPolarAngle(change.newValue), {immediate});
		this.watch(s.minDistance, change => this.setMinDistance(change.newValue), {immediate});
		this.watch(s.maxDistance, change => this.setMaxDistance(change.newValue), {immediate});
		this.watch(s.enableZoom, change => this.setZoomEnabled(change.newValue), {immediate});
	}

	onSetParent(parent?:Component) {
		super.onSetParent(parent);
		if(!parent) {
			if(this.controls) this.controls.enabled = false;
			return;
		}

		if(!(parent instanceof ThreeCamera)) {
			throw new Error("OrbitControls only work on a ThreeCamera.");
		}
		(async () => {
			// We need to wait for the parent to initialize; setParent is called first time before initialization of parent
			await parent.loading;
			if(!(parent === this.parent)) {
				log.info("Parent changed before OrbitControls were setup.");
				return;
			}
			this.setupOrbitControls(parent);
		})();
	}

	setupOrbitControls(camera: ThreeCamera) {
		if(this.controls) this.controls.dispose(); // Stop current one

		const engine = this.getRootComponent();
		if(!(engine instanceof ThreeEngineView)) {
			throw new Error("ThreeOrbitControls only work on ThreeEngineView");
		}

		this.controls = new OrbitControls(camera.camera, engine.renderer.domElement);
		this.applySettings(this.controls);
		this.controls.enabled = false; // should start disabled

		// Update the model together with the change in view
		this.controls.addEventListener('change', () => {
			camera.setPosition(camera.camera.position);
		});
	}

	applySettings(to:OrbitControls) {
		to.enableZoom = this.model.enableZoom;
		to.rotateSpeed = this.model.rotateSpeed;
		to.minDistance = this.model.minDistance
		to.maxDistance = this.model.maxDistance;
		to.maxPolarAngle = this.model.maxPolarAngle;
		to.enabled = this.model.enabled;
	}

	setZoomEnabled(enableZoom: boolean): void {
		if(this.controls) this.controls.enableZoom = enableZoom;
	}

	setRotateSpeed(rotateSpeed: number): void {
		if(this.controls) this.controls.rotateSpeed = rotateSpeed;
	}

	setMinDistance(minDistance: number): void {
		if(this.controls) this.controls.minDistance = minDistance;
	}

	setMaxDistance(maxDistance: number): void {
		if(this.controls) this.controls.maxDistance = maxDistance;
	}

	setMaxPolarAngle(maxPolarAngle: number): void {
		if(this.controls) this.controls.maxPolarAngle = maxPolarAngle;
	}

	setEnabled(enabled:boolean) {
		if(this.controls) this.controls.enabled = enabled;
	}

	onEnable() {
		super.onEnable();
		this.setEnabled(true);
	}

	onDisable() {
		super.onDisable();
		this.setEnabled(false);
	}
}
