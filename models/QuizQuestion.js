let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuizQuestionSchema = new Schema({
    question:String,
    answers:[String],
    correctAnswer: Number,
    quiz:[{
        type: Schema.Types.ObjectId,
        ref:"Quiz"
    }]
})

const model = mongoose.model("QuizQuestion", QuizQuestionSchema)

module.exports = {model}