let express = require ('express')
let  flashCards_post_createOne = require('../controlers/flashCards.js').flashCards_post_createOne
let  flashCards_get_byType = require('../controlers/flashCards.js').flashCards_get_byType

const router = express.Router()
//?type=
router.get('/getByType',flashCards_get_byType)

router.post('/createOne',flashCards_post_createOne)

module.exports = {router}