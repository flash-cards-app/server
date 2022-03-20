let express = require ('express')
let  flashCards_post_createOne = require('../controlers/flashCards.js').flashCards_post_createOne
let  flashCards_get_byType = require('../controlers/flashCards.js').flashCards_get_byType
let flashCards_post_difficultType = require('../controlers/flashCards').flashCards_post_difficultType
let flashCards_post_languageType = require('../controlers/flashCards').flashCards_post_languageType

const router = express.Router()
//?type=
router.get('/getByType',flashCards_get_byType)

router.post('/createOne',flashCards_post_createOne)

router.post('/type/difficult',flashCards_post_difficultType)

router.post('/type/language',flashCards_post_languageType)


module.exports = {router}