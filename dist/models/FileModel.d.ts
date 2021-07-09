import Model from 'mozel';
export default class FileModel extends Model {
    static get type(): string;
    name: string;
    size: number;
    url: string;
}
