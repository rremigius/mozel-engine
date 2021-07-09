import ObjectModel from "@/models/ObjectModel";
import React from "react";
import UIView, {ReactViewComponentPropsWithStyles, UIViewReact} from "@/views/ui/UIView";
import {components} from "mozel-component/dist/Component";
import {schema} from "mozel";
import SceneModel from "@/models/SceneModel";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import {createStyles, Theme, withStyles} from "@material-ui/core";
import ObjectController from "@/controllers/ObjectController";
import UIObjectProperties from "@/views/ui/UIObjectView/UIObjectProperties";
import {ReactViewComponent} from "mozel-component/dist/View/ReactView";
import View from "mozel-component/dist/View";

type Props = ReactViewComponentPropsWithStyles<UIObjectView, typeof styles>
type State = {};
export const UIObjectViewReact = withStyles(styles())(
	class UIObjectViewReact extends ReactViewComponent<Props, State> {
		handleClick() {
			if(this.view.controller) {
				this.view.controller.select();
			}
		}
		onInitWatchers() {
			super.onInitWatchers();
			this.watch('position.*', () => this.forceUpdate());
			this.watchEvent(this.view.objects.events.add, ()=>this.forceUpdate());
			this.watchEvent(this.view.objects.events.remove, ()=>this.forceUpdate());
		}

		render() {
			return <div>
				<UIViewReact
					view={this.view}
					properties={<UIObjectProperties view={this.view}/>}
					selected={this.model.selected}
					onClick={this.handleClick.bind(this)}
					children={this.renderChildren(this.view.objects)}
				/>
			</div>;
		}
	}
)
function styles() {
	return (theme:Theme) => createStyles({

	});
}

export default class UIObjectView extends UIView {
	static Model = ObjectModel;
	declare model:ObjectModel;

	// We use UIObjectView as factory type and runtime check, but cannot override parent type because of events
	@components(schema(SceneModel).objects, UIObjectView)
	objects!:ComponentList<View>;

	declare controller:ObjectController|undefined;

	getReactComponent(): typeof React.Component {
		return UIObjectViewReact as typeof React.Component;
	}

	onInit() {
		super.onInit();
		this.controller = this.findController(ObjectController);
	}
}
