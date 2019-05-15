import * as mongoose from 'mongoose'


const schema = mongoose.Schema
const bankSchema = new schema(
    {
        name: {type:String, required:true},
        address: {type:String},
        date: {type:Date,default:Date.now}
    }
)

export const bankModel = mongoose.model("bank",bankSchema)
