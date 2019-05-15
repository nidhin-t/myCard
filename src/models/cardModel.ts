import * as mongoose from 'mongoose'


const schema = mongoose.Schema
const cardSchema = new schema(
    {
        name: {type:String, required:true},
        Createdate: {type:Date,default:Date.now},
        cardBank: {type: schema.Types.ObjectId, ref:'bank', required:true},
        cardType: {type:String,enum:['credit','debit']}
    }
)
export const cardModel = mongoose.model("card",cardSchema)
