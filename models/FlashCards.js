let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FlashCardsSchema = new Schema({
    language:{
        type: Schema.Types.ObjectId, ref:"LanguageType", required: true
    },
    difficult:{
        type: Schema.Types.ObjectId, ref:"DifficultType", required: true
    },
    type:{
        type: String,
    },
    question:{
        type: String,
    },
    answear:{
        type: String,
    }
})

const model = mongoose.model("FlashCards", FlashCardsSchema)

module.exports = {model}
