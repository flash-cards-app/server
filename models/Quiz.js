let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Quiz = new Schema({
    name:{
        type: String,
    },
    type:{
        type: String,
    },
    questions: [
        {
            quizQuestionId: { type: Schema.Types.ObjectId, ref:"QuizQuestion", required: true }
        }
    ]
})

const model = mongoose.model("Quiz", Quiz)

module.exports = {model}