import { Mesh, MeshBasicMaterial, PlaneGeometry, VideoTexture } from "three";
import VideoModel from "@/models/ObjectModel/VideoModel";
import ThreeObject from "@/views/threejs/ThreeObject";
import VideoController from "@/controllers/ObjectController/VideoController";
export default class ThreeVideo extends ThreeObject {
    static Model: typeof VideoModel;
    model: VideoModel;
    controller: VideoController;
    mesh?: Mesh;
    video?: HTMLVideoElement;
    videoTexture?: VideoTexture;
    loaded: boolean;
    onInit(): void;
    play(): void;
    pause(): void;
    onVideoReady(): void;
    onLoad(): Promise<void>;
    clear(): void;
    createMesh(video: HTMLVideoElement): Mesh<PlaneGeometry, MeshBasicMaterial>;
    loadVideo(url: string): Promise<void>;
}
