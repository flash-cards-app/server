let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Quiz = new Schema({
    name:String,
    questions: [
        {
            quizQuestionId: { type: Schema.Types.ObjectId, ref:"QuizQuestion", required: true }
        }
    ],
    time:Number,
})

const model = mongoose.model("Quiz", Quiz)

module.exports = {model}