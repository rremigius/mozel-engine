import BehaviourModel from '@/models/BehaviourModel';
import FileModel from "@/models/FileModel";
export default class SoundBehaviourModel extends BehaviourModel {
    static get type(): string;
    file?: FileModel;
}
