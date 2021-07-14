import EngineModel from "./models/EngineModel";
import LightModel from "./models/ObjectModel/LightModel";
import CameraModel from "./models/ObjectModel/CameraModel";
import OrbitControlsModel from "./models/ObjectModel/CameraModel/OrbitControlsModel";
import Model3DModel from "./models/ObjectModel/Model3DModel";
import SphereModel from "./models/ObjectModel/SphereModel";
import EngineModelFactory from "./models/EngineModelFactory";
import {ClickToDestroyBehaviourModel} from "@/ClickToDestroyBehaviour";

const models = new EngineModelFactory();
const model = models.create(EngineModel, {
	gid: 'engine',
	camera: {gid: 'camera'},
	scene: {
		gid: 'scene',
		description: 'foo',
		marker: 'data-nft/pinball',
		objects: [
			models.create(LightModel, {gid: 'light'}),
			models.create(CameraModel, {
				gid: 'camera',
				position: {z: 5},
				behaviours: [models.create(OrbitControlsModel, {
					maxDistance: 10,
					minDistance: 2,
					enableZoom: true,
					rotateSpeed: 0.5,
					maxPolarAngle: 1.5
				})]
			}),
			models.create(Model3DModel, {
				gid: 'vw',
				files: [{url: 'assets/models/vw/model.dae'}],
				scale: 0.5,
				position: {z: 0.5, x: 2},
				behaviours: [
					models.create(ClickToDestroyBehaviourModel)
				],
				objects: []
			}),
			models.create(SphereModel, {
				gid: 'sphere',
				radius: 0.2
			})
		]
	}
});

export default model;
export {models};
