import ObjectController, {ObjectControllerEvents} from "@/controllers/ObjectController";
import Model3DModel from "@/models/ObjectModel/Model3DModel";
import {ComponentEvent} from "mozel-component/dist/Component";
import Log from "@/log";

const log = Log.instance("model3d-controller");

export class MeshClickEvent extends ComponentEvent<{mesh:string}> {}
export class Model3DControllerEvents extends ObjectControllerEvents {
	meshClick = this.$event(MeshClickEvent);
}

export default class Model3DController extends ObjectController {
	static Model = Model3DModel;
	declare model:Model3DModel;

	static Events = Model3DControllerEvents;
	declare events:Model3DControllerEvents;

	clickMesh(mesh:string) {
		log.info("Mesh clicked:", mesh);
		this.events.meshClick.fire(new MeshClickEvent(this, {mesh: mesh}));
	}
}
