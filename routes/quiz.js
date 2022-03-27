let express = require ('express')

let  {
    quiz_post_create,
    quiz_get_byType,
    quiz_patch_update,
    quiz_delete_Quiz,
    quiz_post_Question,
    quiz_patch_Question,
    quiz_delete_Question
} = require('../controlers/quiz.js')

const router = express.Router()

router.post('/create',quiz_post_create)

router.get('/getByType',quiz_get_byType)

router.patch('/quiz', quiz_patch_update)

router.delete('/delete', quiz_delete_Quiz)

router.post('/question',quiz_post_Question)

router.patch('/question', quiz_patch_Question)

router.delete('/question', quiz_delete_Question)

module.exports = {router}