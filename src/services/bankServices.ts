import { bankModel } from "../models/bankModel"
import { ResponseService } from "../helper/resonseService"
import { Request, Response } from 'express'


export class BankService {
    public static async createBank(req: Request) {
        try {
            let newBank = new bankModel(req.body);
            await newBank.save()
            return ResponseService.getValidResponse(newBank)
        }
        catch (error) {
            ResponseService.getInvalidResponse(error)
        }
    }

    public static async updateBank(req: any, res: any) {

    }

    public static async deleteBank(req: any, res: any) {

    }

    public static async getAllBank(req: Request) {
        try {
            let allBanks = await bankModel.find().exec();
            return ResponseService.getValidResponse(allBanks)

        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }

    public static async getBankById(req: Request) {
        try {
            let bank = await bankModel.findById(req.params.bankId).exec();
            return ResponseService.getValidResponse(bank)
        }
        catch (err) {
            ResponseService.getInvalidResponse(err)
        }

    }
}