let mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuizQuestionSchema = new Schema({
    question:{
        type: String,
    },
    answers:[String],
    correctAnswer: {
        type: Number
    },
    quiz:{
        type: Schema.Types.ObjectId,
        ref:"Quiz"
    }

})

const model = mongoose.model("QuizQuestion", QuizQuestionSchema)

module.exports = {model}
// module.exports = model