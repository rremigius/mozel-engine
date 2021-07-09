import ObjectController from "@/controllers/ObjectController";
import ImageModel from "@/models/ObjectModel/ImageModel";
export default class ImageController extends ObjectController {
    static Model: typeof ImageModel;
    model: ImageModel;
}
