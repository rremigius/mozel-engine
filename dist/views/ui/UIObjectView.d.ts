import ObjectModel from "@/models/ObjectModel";
import React from "react";
import UIView, { ReactViewComponentPropsWithStyles } from "@/views/ui/UIView";
import ComponentList from "mozel-component/dist/Component/ComponentList";
import { Theme } from "@material-ui/core";
import ObjectController from "@/controllers/ObjectController";
import View from "mozel-component/dist/View";
declare type Props = ReactViewComponentPropsWithStyles<UIObjectView, typeof styles>;
export declare const UIObjectViewReact: React.ComponentType<Pick<Props, "view"> & import("@material-ui/core").StyledComponentProps<never>>;
declare function styles(): (theme: Theme) => import("@material-ui/styles").StyleRules<{}, never>;
export default class UIObjectView extends UIView {
    static Model: typeof ObjectModel;
    model: ObjectModel;
    objects: ComponentList<View>;
    controller: ObjectController | undefined;
    getReactComponent(): typeof React.Component;
    onInit(): void;
}
export {};
