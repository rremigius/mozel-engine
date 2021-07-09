import { Theme, WithStyles } from "@material-ui/core";
import React from "react";
import { Styles } from "@material-ui/core/styles/withStyles";
import { ReactViewComponentProps } from "mozel-component/dist/View/ReactView";
import View from "mozel-component/dist/View";
import { ReactView } from "mozel-component";
export declare type ReactViewComponentPropsWithStyles<T extends View, S extends () => string | Styles<any, any, any>> = ReactViewComponentProps<T> & WithStyles<ReturnType<S>>;
declare type Props = ReactViewComponentPropsWithStyles<UIView, typeof styles> & {
    onClick?: () => void;
    selected?: boolean;
    icon?: JSX.Element;
    properties?: JSX.Element;
    children?: JSX.Element[];
};
export declare const UIViewReact: React.ComponentType<Pick<Props, "icon" | "children" | "view" | "onClick" | "selected" | "properties"> & import("@material-ui/core").StyledComponentProps<"button" | "children" | "uiView">>;
declare function styles(): (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "button" | "children" | "uiView">;
export default class UIView extends ReactView {
    getReactComponent(): typeof React.Component;
}
export {};
