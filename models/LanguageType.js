let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LangugeTypeSchema = new Schema({
    language:{
        type: String,
    },
})

const model = mongoose.model("LanguageType", LangugeTypeSchema)


module.exports = {model}
