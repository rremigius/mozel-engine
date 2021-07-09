import React from 'react';
import { Theme, WithStyles } from "@material-ui/core";
import Engine from "@/Engine";
declare type Props = WithStyles<typeof styles> & {
    engine: Engine;
};
declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "app" | "appBar" | "engine" | "drawer" | "drawerPaper" | "drawerContainer">;
declare const _default: React.ComponentType<Pick<Props, "engine"> & import("@material-ui/core").StyledComponentProps<"app" | "appBar" | "engine" | "drawer" | "drawerPaper" | "drawerContainer">>;
export default _default;
