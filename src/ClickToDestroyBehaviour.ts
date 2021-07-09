import BehaviourController from "./controllers/BehaviourController";
import {EventListener} from "mozel-component";
import {ViewClickEvent} from "mozel-component/dist/View";
import Component from "mozel-component/dist/Component";
import ObjectController from "./controllers/ObjectController";
import BehaviourModel from "./models/BehaviourModel";

export class ClickToDestroyBehaviourModel extends BehaviourModel {
	static get type() { return 'ClickToDestroy' }
}

export class ClickToDestroyBehaviour extends BehaviourController {
	static Model = ClickToDestroyBehaviourModel;
	declare model:ClickToDestroyBehaviourModel;

	parentListener?:EventListener<ViewClickEvent>

	onSetParent(parent?: Component) {
		super.onSetParent(parent);
		// Stop current listener
		if(this.parentListener) {
			this.parentListener.stop();
		}
		// Start new listener
		if(parent instanceof ObjectController) {
			this.parentListener = this.listenTo(parent.events.rightClick, () => {
				parent.destroy();
			});
		}
	}
}
