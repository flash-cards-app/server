let express = require ('express')

let  quiz_get_byType = require('../controlers/quiz.js').quiz_get_byType

const router = express.Router()

router.get('/getByType',quiz_get_byType)

module.exports = {router}