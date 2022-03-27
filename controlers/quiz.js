let QuizSchema = require('../models/Quiz.js').model
let QuizQuestionSchema = require('../models/QuizQuestion.js').model

const quiz_get_byType = async (req, res) => {
    let type = req.query.type
    try {
        const quiz = await QuizSchema.find({ "language": type })
        res.json({ quiz })
    }
    catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_post_create = async () => {
    const { name, questions, time } = req.body
    try {
        await QuizSchema.create({ name, questions, time })
        res.statusCode = 200
        res.json({ success: true, message: "Created new quiz" })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_patch_update = async (req, res) => {
    const { id, name, questions, time } = req.body
    try {
        await QuizSchema.update({ _id: id }, { name, questions, time })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_delete_Quiz = async (req, res) => {
    const { id } = req.body
    try {
        await QuizSchema.remove({ _id: id })
        res.statusCode = 200
        res.json({ success: true, message: "Deleted quiz" })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_post_Question = async (req, res) => {
    const { question, answers, correctAnswer, quiz } = req.body
    try {
        await QuizQuestionSchema.create({ question, answers, correctAnswer, quiz })
        res.statusCode = 200
        res.json({ success: true, message: "Created new question" })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_patch_Question = async (req, res) => {
    const { id, question, answers, correctAnswer, quiz } = req.body
    try {
        await QuizQuestionSchema.update({ _id: id }, { question, answers, correctAnswer, quiz })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const quiz_delete_Question = async (req, res) => {
    const { id } = req.body
    try {
        await QuizQuestionSchema.remove({ _id: id })
        res.statusCode = 200
        res.json({ success: true, message: "Deleted question" })
    } catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

module.exports = { quiz_get_byType,
    quiz_post_create,
    quiz_patch_update,
    quiz_delete_Quiz,
    quiz_post_Question,
    quiz_patch_Question,
    quiz_delete_Question
}