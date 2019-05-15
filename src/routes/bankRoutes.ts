import { Router } from 'express'
import { BankController } from "../controller/bankController"

const BankControllerObj = new BankController()
export const bankRoute: Router = Router()

bankRoute.post('/create', BankControllerObj.createBank)
bankRoute.get('/getall', BankControllerObj.getAllBank)
bankRoute.get('/:bankId',BankControllerObj.getBankById)
bankRoute.put('/update', BankControllerObj.updateBank)
bankRoute.delete('/delete', BankControllerObj.deleteBank)