import EngineModel from "@/models/EngineModel";
import {ReactViewComponent, ReactViewComponentProps} from "mozel-component/dist/View/ReactView";
import UISceneView from "@/views/ui/UISceneView";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import React from 'react';
import UIView, {UIViewReact} from "./UIView";
import {Memory} from "@material-ui/icons";

class UIEngineReactViewComponent extends ReactViewComponent<ReactViewComponentProps<UIEngineView>, {}> {
	onInitWatchers() {
		super.onInitWatchers();
		this.watchEvent(this.view.scene.events.change, ()=>this.forceUpdate());
	}

	render() {
		const scene = this.view.scene.current;
		return <UIViewReact
			view={this.view}
			icon={<Memory/>}
			children={scene ? [scene.render({key: 0})] : undefined}
		/>
	}
}

export default class UIEngineView extends UIView {
	static Model = EngineModel;
	declare model:EngineModel;

	// @component(schema(UIEngineView.Model).scene, UISceneView)
	_scene!:ComponentSlot<UISceneView>;

	get scene():ComponentSlot<UISceneView> {
		return this._scene;
	}

	set scene(scene:ComponentSlot<UISceneView>){
		console.log("DEBUG", scene);
		this._scene = scene;
	}

	getReactComponent(): typeof React.Component {
		return UIEngineReactViewComponent as typeof React.Component;
	}
}
UIEngineView.defineComponentSlot('scene', 'scene', UISceneView);
