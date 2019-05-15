import * as Express from "express"
import { bankRoute } from "../routes/bankRoutes";
import { cardRoute } from "../routes/cardRoutes";


export class Routes {
    public static registerRoutes(app: Express.Application) {
        app.get('/', (req: Request, res: any) => {
            res.send("It Works!!")
        });
        app.use('/api/bank', bankRoute)
        app.use('/api/card', cardRoute)
    }
}
