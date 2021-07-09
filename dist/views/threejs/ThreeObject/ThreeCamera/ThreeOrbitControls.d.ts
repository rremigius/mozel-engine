import ThreeCamera from "../ThreeCamera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import OrbitControlsModel from "@/models/ObjectModel/CameraModel/OrbitControlsModel";
import Component from "mozel-component/dist/Component";
export default class ThreeOrbitControls extends Component {
    static Model: typeof OrbitControlsModel;
    model: OrbitControlsModel;
    controls?: OrbitControls;
    onInit(): void;
    onSetParent(parent?: Component): void;
    setupOrbitControls(camera: ThreeCamera): void;
    applySettings(to: OrbitControls): void;
    setZoomEnabled(enableZoom: boolean): void;
    setRotateSpeed(rotateSpeed: number): void;
    setMinDistance(minDistance: number): void;
    setMaxDistance(maxDistance: number): void;
    setMaxPolarAngle(maxPolarAngle: number): void;
    setEnabled(enabled: boolean): void;
    onEnable(): void;
    onDisable(): void;
}
