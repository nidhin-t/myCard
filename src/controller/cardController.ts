import { cardServices } from "../services/cardServices"
import { ResponseService } from "../helper/resonseService"
//import { Request , Response} from "express"
export class CardController {
    public async createCard(req: any, res: any) {
        console.log("Entered created")
        console.log(req.body)
        let response = await cardServices.createCard(req)
        res.send(response)
    }
    public async updateCard(req: any, res: any) {
        let response = await cardServices.updateCard(req, res)
        return res.json(response)
    }
    
    public async deleteCard(req: any, res: any) {

    }
    public async getAllCard(req: any, res: any) {
        console.log("It works till here")
        let response = await cardServices.getAllCard(req)
        res.json(response)

    }
    public async getcardById(req: any, res: any) {
        let response = await cardServices.getCardById(req,res)
        res.json(response)
    }
}