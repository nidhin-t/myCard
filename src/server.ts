import { Database } from './startup/db'
import { bankRoute } from "./routes/bankRoutes"
import { Routes } from "./startup/routes"
import * as express from 'express'
import * as bodyParser from 'body-parser'

class App {
    app : express.Application;

    constructor() {
        this.app = express();
        this.app.listen(3000, 'localhost', () => {
            console.log('>>>Server Started on port 3000>>>')
        });


        this.ConfigBodyParser();
        Database.ConnectDb();

        Routes.registerRoutes(this.app)


    }

    private ConfigBodyParser() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

}

const myCardApp = new App()
//user Card CRUD operations

