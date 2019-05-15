import * as mongoose from "mongoose"

export class Database {
    private static MongoDbUrl: string = "mongodb://localhost:27017/myCard"
    public static ConnectDb() {
        mongoose.connect(this.MongoDbUrl,{useNewUrlParser:true})
            .then(() => {
                console.log(">>>Database connection successful!")
            })
            .catch((err) => {
                console.log("Database connection Failed")
                console.error(err)
            })
    }
}
