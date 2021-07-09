import ObjectController, {ObjectControllerEvents} from "@/controllers/ObjectController";
import VideoModel from "@/models/ObjectModel/VideoModel";
import Log from "@/log";
import {ComponentEvent} from "mozel-component/dist/Component";
import {immediate, schema} from "mozel";

const log = Log.instance("video-controller");

export class PlayEvent extends ComponentEvent<{}> {}
export class PauseEvent extends ComponentEvent<{}> {}
export class VideoControllerEvents extends ObjectControllerEvents {
	play = this.$event(PlayEvent);
	pause = this.$event(PauseEvent);
}

export default class VideoController extends ObjectController {
	static Model = VideoModel;
	declare model:VideoModel;

	static Events = VideoControllerEvents;
	declare events:VideoControllerEvents;

	onInit() {
		super.onInit();

		this.model.$watch(schema(VideoModel).playing, playing => {
			if(playing) {
				this.events.play.fire(new PlayEvent(this));
			} else {
				this.events.pause.fire(new PauseEvent(this));
			}
		}, {immediate});
	}

	play() {
		this.model.playing = true;
	}

	pause() {
		this.model.playing = false;
	}

	stop() {
		this.seek(0);
		this.model.playing = false;
	}

	seek(time:number) {
		this.model.time = time;
	}

	onDisable() {
		super.onDisable();
		log.info("Pausing video.");
		this.pause();
	}

	onEnable() {
		super.onEnable();
		log.info("Playing video.");
		this.play();
	}
}
