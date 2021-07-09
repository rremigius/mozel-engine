import ThreeObject from "@/views/threejs/ThreeObject";
import CameraModel from "@/models/ObjectModel/CameraModel";
import { Camera } from "three";
export default class ThreeCamera extends ThreeObject {
    static Model: typeof CameraModel;
    model: CameraModel;
    get camera(): Camera;
    createObject3D(): {
        gid: import("mozel").alphanumeric;
        onClick(event: import("../ThreeEngineView").ThreeClickEvent): void;
        id: number;
        uuid: string;
        name: string;
        type: string;
        parent: import("three").Object3D | null;
        children: import("three").Object3D[];
        up: import("three").Vector3;
        readonly position: import("three").Vector3;
        readonly rotation: import("three").Euler;
        readonly quaternion: import("three").Quaternion;
        readonly scale: import("three").Vector3;
        readonly modelViewMatrix: import("three").Matrix4;
        readonly normalMatrix: import("three").Matrix3;
        matrix: import("three").Matrix4;
        matrixWorld: import("three").Matrix4;
        matrixAutoUpdate: boolean;
        matrixWorldNeedsUpdate: boolean;
        layers: import("three").Layers;
        visible: boolean;
        castShadow: boolean;
        receiveShadow: boolean;
        frustumCulled: boolean;
        renderOrder: number;
        animations: import("three").AnimationClip[];
        userData: {
            [key: string]: any;
        };
        customDepthMaterial: import("three").Material;
        customDistanceMaterial: import("three").Material;
        readonly isObject3D: true;
        onBeforeRender: (renderer: import("three").WebGLRenderer, scene: import("three").Scene, camera: Camera, geometry: import("three").BufferGeometry, material: import("three").Material, group: import("three").Group) => void;
        onAfterRender: (renderer: import("three").WebGLRenderer, scene: import("three").Scene, camera: Camera, geometry: import("three").BufferGeometry, material: import("three").Material, group: import("three").Group) => void;
        applyMatrix4(matrix: import("three").Matrix4): void;
        applyQuaternion(quaternion: import("three").Quaternion): any;
        setRotationFromAxisAngle(axis: import("three").Vector3, angle: number): void;
        setRotationFromEuler(euler: import("three").Euler): void;
        setRotationFromMatrix(m: import("three").Matrix4): void;
        setRotationFromQuaternion(q: import("three").Quaternion): void;
        rotateOnAxis(axis: import("three").Vector3, angle: number): any;
        rotateOnWorldAxis(axis: import("three").Vector3, angle: number): any;
        rotateX(angle: number): any;
        rotateY(angle: number): any;
        rotateZ(angle: number): any;
        translateOnAxis(axis: import("three").Vector3, distance: number): any;
        translateX(distance: number): any;
        translateY(distance: number): any;
        translateZ(distance: number): any;
        localToWorld(vector: import("three").Vector3): import("three").Vector3;
        worldToLocal(vector: import("three").Vector3): import("three").Vector3;
        lookAt(vector: number | import("three").Vector3, y?: number | undefined, z?: number | undefined): void;
        add(...object: import("three").Object3D[]): any;
        remove(...object: import("three").Object3D[]): any;
        removeFromParent(): any;
        clear(): any;
        attach(object: import("three").Object3D): any;
        getObjectById(id: number): import("three").Object3D | undefined;
        getObjectByName(name: string): import("three").Object3D | undefined;
        getObjectByProperty(name: string, value: string): import("three").Object3D | undefined;
        getWorldPosition(target: import("three").Vector3): import("three").Vector3;
        getWorldQuaternion(target: import("three").Quaternion): import("three").Quaternion;
        getWorldScale(target: import("three").Vector3): import("three").Vector3;
        getWorldDirection(target: import("three").Vector3): import("three").Vector3;
        raycast(raycaster: import("three").Raycaster, intersects: import("three").Intersection[]): void;
        traverse(callback: (object: import("three").Object3D) => any): void;
        traverseVisible(callback: (object: import("three").Object3D) => any): void;
        traverseAncestors(callback: (object: import("three").Object3D) => any): void;
        updateMatrix(): void;
        updateMatrixWorld(force?: boolean | undefined): void;
        updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;
        toJSON(meta?: {
            geometries: any;
            materials: any;
            textures: any;
            images: any;
        } | undefined): any;
        clone(recursive?: boolean | undefined): any;
        copy(source: any, recursive?: boolean | undefined): any;
        addEventListener(type: string, listener: (event: import("three").Event) => void): void;
        hasEventListener(type: string, listener: (event: import("three").Event) => void): boolean;
        removeEventListener(type: string, listener: (event: import("three").Event) => void): void;
        dispatchEvent(event: {
            [attachment: string]: any;
            type: string;
        }): void;
    } & Camera;
    setAspectRatio(ratio: number): void;
}
