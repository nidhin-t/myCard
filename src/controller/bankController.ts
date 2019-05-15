import { BankService } from "../services/bankServices"
import { Request, Response } from "express"


export class BankController {
    public async createBank(req: Request, res: Response) {
        let response = await BankService.createBank(req)
        res.send(response)
    }

    public async updateBank(req: Request, res: Response) {
        let response = await BankService.updateBank
        res.json(response)
    }

    public async deleteBank(req: Request, res: Response) {

    }

    public async getAllBank(req: Request, res: Response) {
        console.log("enters controller");
        let response = await BankService.getAllBank(req)
        res.send(response)
    }

    public async getBankById(req: Request, res: Response) {
        console.log("enters controller");
        let response = await BankService.getBankById(req)
        res.send(response)
    }
}