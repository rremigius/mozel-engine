import React from "react";
import SceneModel from "@/models/SceneModel";
import {schema} from "mozel";
import {components} from "mozel-component/dist/Component";
import UIObjectView from "@/views/ui/UIObjectView";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import UIView, {ReactViewComponentPropsWithStyles, UIViewReact} from "@/views/ui/UIView";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import {Category} from "@material-ui/icons";
import {ReactViewComponent} from "mozel-component/dist/View/ReactView";
import View from "mozel-component/dist/View";

type Props = ReactViewComponentPropsWithStyles<UISceneView, typeof styles>
type State = {};
export const UISceneViewReact = withStyles(styles())(
	class UISceneViewReact extends ReactViewComponent<Props, State> {
		onInitWatchers() {
			super.onInitWatchers();
			this.watchEvent(this.view.objects.events.add, ()=>this.forceUpdate());
			this.watchEvent(this.view.objects.events.remove, ()=>this.forceUpdate());
		}

		render() {
			return <UIViewReact
				view={this.view}
				icon={<Category/>}
				children={this.renderChildren(this.view.objects)}
			/>;
		}
	}
);
function styles() {
	return (theme:Theme) => createStyles({

	});
}

export default class UISceneView extends UIView {
	static Model = SceneModel;
	declare model:SceneModel;

	// We use UIObjectView as factory type and runtime check, but cannot override parent type because of events
	@components(schema(SceneModel).objects, UIObjectView)
	objects!:ComponentList<View>;

	getReactComponent(): typeof React.Component {
		return UISceneViewReact as typeof React.Component;
	}
}
