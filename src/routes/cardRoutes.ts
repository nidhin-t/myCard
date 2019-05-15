import { Router } from 'express'
import { CardController } from "../controller/cardController"

const CardControllerObj = new CardController()

export const cardRoute:Router = Router()
cardRoute.post('/create',CardControllerObj.createCard)
cardRoute.get('/:cardId',CardControllerObj.getcardById)
cardRoute.get('/getall',CardControllerObj.getAllCard)
cardRoute.put('/:cardId',CardControllerObj.updateCard)
cardRoute.delete('/delete',CardControllerObj.deleteCard)