import { cardModel } from "../models/cardModel"
import {ResponseService} from "../helper/resonseService"
import { cardRoute } from "routes/cardRoutes";

export class cardServices {
    public static async createCard(req:any) {
        try {
            let newCard = new cardModel(req.body)
            await newCard.save()
            return ResponseService.getValidResponse(newCard)
        }
        catch(err) {
            return ResponseService.getInvalidResponse(err)
        }
    }
    public static async updateCard(req: any, res: any) {
        try {
            console.log("card")
            console.log(req.body.name)
            console.log(req.params.cardId)
            let card = await cardModel.findByIdAndUpdate(req.params.cardId,req.body,{new:true}).exec()

            return ResponseService.getValidResponse(card)
        }
        catch(err)
        {
            console.log(err)
            return ResponseService.getInvalidResponse(err)
        }

    }

    public static async deleteCard(req: any, res: any) {

    }

    public static async getAllCard(req:any) {
        try {
            let newCard = await cardModel.find()
            .populate({path:'cardBank', select: 'name'})
            .exec();
            console.log(newCard)
            return ResponseService.getValidResponse(newCard)
             
         }
         catch(err) {
            return ResponseService.getInvalidResponse(err)
         }

    }

    public static async getCardById(req: any, res: any) {
        try {
            let newCard = await cardModel.findById(req.params.cardId)
            .populate({path:'cardBank', select: 'name'})
            .exec();
            console.log(newCard)
            return ResponseService.getValidResponse(newCard)
             
         }
         catch(err) {
            return ResponseService.getInvalidResponse(err)
         }

    }
}