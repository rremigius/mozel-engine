import { ReactViewComponentPropsWithStyles } from "../UIView";
import UIObjectView from "../UIObjectView";
import { Theme } from "@material-ui/core";
import React from 'react';
declare type Props = ReactViewComponentPropsWithStyles<UIObjectView, typeof styles>;
declare const UIObjectProperties: React.ComponentType<Pick<Props, "view"> & import("@material-ui/core").StyledComponentProps<"form">>;
declare function styles(): (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "form">;
export default UIObjectProperties;
