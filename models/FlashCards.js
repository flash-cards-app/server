let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FlashCardsSchema = new Schema({
    language:{
        type: String,
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
