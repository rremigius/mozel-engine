import BehaviourController from "@/controllers/BehaviourController";
// import {Howl } from 'howler';
import SoundBehaviourModel from "@/models/BehaviourModel/SoundBehaviourModel";
import {ComponentAction, ComponentActions} from "mozel-component/dist/Component";

export class PlayAction extends ComponentAction<{}> {}
export class PlayActions extends ComponentActions {
	play = this.$action(PlayAction);
}

export default class SoundBehaviourController extends BehaviourController {
	static Model = SoundBehaviourModel;
	declare model:SoundBehaviourModel;

	static Actions = PlayActions;
	declare actions:PlayActions;

	onInit() {
		super.onInit();
		this.actions.play.on(this.play.bind(this));
	}

	play() {
		// if (this.soundBehaviour.file) {
		// 	const sound = new Howl({
		// 		src: [this.soundBehaviour.file.url]
		// 	});
		// 	sound.play();
		// }
	}

}
