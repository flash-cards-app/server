let express = require ('express')
let languageTypes_get_all = require('../controlers/types.js').languageTypes_get_all

let router = express.Router()

router.get('/languages', languageTypes_get_all)

module.exports = {router}