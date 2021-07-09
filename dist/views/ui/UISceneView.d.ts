import React from "react";
import SceneModel from "@/models/SceneModel";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import UIView, { ReactViewComponentPropsWithStyles } from "@/views/ui/UIView";
import { Theme } from "@material-ui/core";
import View from "mozel-component/dist/View";
declare type Props = ReactViewComponentPropsWithStyles<UISceneView, typeof styles>;
export declare const UISceneViewReact: React.ComponentType<Pick<Props, "view"> & import("@material-ui/core").StyledComponentProps<never>>;
declare function styles(): (theme: Theme) => import("@material-ui/styles").StyleRules<{}, never>;
export default class UISceneView extends UIView {
    static Model: typeof SceneModel;
    model: SceneModel;
    objects: ComponentList<View>;
    getReactComponent(): typeof React.Component;
}
export {};
