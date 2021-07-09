import BehaviourModel from '@/models/BehaviourModel';
import FileModel from "@/models/FileModel";
import {property} from "mozel";

export default class SoundBehaviourModel extends BehaviourModel {
	static get type() { return 'SoundBehaviour' }

	@property(FileModel)
	file?:FileModel;
}
