import EngineModel from "@/models/EngineModel";
import UISceneView from "@/views/ui/UISceneView";
import ComponentSlot from "mozel-component/dist/Component/ComponentSlot";
import React from 'react';
import UIView from "./UIView";
export default class UIEngineView extends UIView {
    static Model: typeof EngineModel;
    model: EngineModel;
    _scene: ComponentSlot<UISceneView>;
    get scene(): ComponentSlot<UISceneView>;
    set scene(scene: ComponentSlot<UISceneView>);
    getReactComponent(): typeof React.Component;
}
