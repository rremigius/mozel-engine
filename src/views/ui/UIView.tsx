import {
	Collapse,
	createStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Theme,
	WithStyles,
	withStyles
} from "@material-ui/core";
import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {CropFree, ExpandLess, ExpandMore} from "@material-ui/icons";
import ReactView, {ReactViewComponent, ReactViewComponentProps} from "mozel-component/dist/View/ReactView";
import View from "mozel-component/dist/View";

export type ReactViewComponentPropsWithStyles<T extends View, S extends ()=>string|Styles<any,any,any>> =
	ReactViewComponentProps<T> & WithStyles<ReturnType<S>>;

type Props = ReactViewComponentPropsWithStyles<UIView, typeof styles> & {
	onClick?:()=>void,
	selected?:boolean,
	icon?: JSX.Element,
	properties?: JSX.Element,
	children?: JSX.Element[]
};
type State = {expanded:boolean};

export const UIViewReact = withStyles(styles())(
	class UIViewReact extends ReactViewComponent<Props, State> {
		constructor(props:Props) {
			super(props);
			this.state = {expanded: false};
		}
		handleClick() {
			if(this.props.onClick) {
				this.props.onClick();
			}
		}
		expand() {
			this.setState({expanded: true});
		}
		collapse() {
			this.setState({expanded: false});
		}
		render() {
			const classes = this.props.classes;
			return (
				<div className={classes.uiView}>
					<ListItem button onClick={this.handleClick.bind(this)} selected={this.props.selected}>
						<ListItemIcon>
							{this.props.icon ? this.props.icon : <CropFree/>}
						</ListItemIcon>
						<ListItemText primary={`${this.model.static.type} (${this.model.gid})`}/>
						{
							this.state.expanded
								? <ExpandLess onClick={()=>this.collapse()}/>
								: <ExpandMore onClick={()=>this.expand()}/>
						}
					</ListItem>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						{ this.props.properties ? this.props.properties : null }
						<List component="div" disablePadding className={classes.children}>
							{this.props.children}
						</List>
					</Collapse>
				</div>
			)
		}
	}
);

function styles() {
	return (theme: Theme) => createStyles({
		uiView: { /* ... */ },
		children: {
			paddingLeft: theme.spacing(2)
		},
		button: { /* ... */ },
	});
}

export default class UIView extends ReactView {
	getReactComponent():typeof React.Component {
		return UIViewReact as typeof React.Component;
	}
}
