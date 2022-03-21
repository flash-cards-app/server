let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DifficultTypeSchema = new Schema({
    difficult:{
        type: String,
    },
})

const model = mongoose.model("DifficultType", DifficultTypeSchema)

module.exports = {model}
