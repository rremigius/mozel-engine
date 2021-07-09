import ViewFactory from "mozel-component/dist/View/ViewFactory";
import MozelForm from "mozel-form";
import Component from "mozel-component/dist/Component";
import ObjectModel from "@/models/ObjectModel";

class ObjectForm extends MozelForm {
	static Model = ObjectModel;
	static fields = ['enabled', 'position', 'objects'];
}
export default class UIFactory extends ViewFactory {
	initDependencies() {
		super.initDependencies();
		this.registerDefault(Component, MozelForm);
		this.register(ObjectForm);
	}
}
