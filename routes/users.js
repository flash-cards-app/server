let express = require('express')
let users_get_all = require('../controlers/users.js').users_get_all
let users_get_one = require('../controlers/users.js').users_get_one
let users_post_register = require('../controlers/users.js').users_post_register
let users_post_login = require('../controlers/users.js').users_post_login
let users_post_code = require('../controlers/users.js').users_post_code
let users_post_checkIsAdmin = require('../controlers/users.js').users_post_checkIsAdmin
let users_post_adminPanel = require('../controlers/users.js').users_post_adminPanel
// let { dataBase_post_deleteAll } = require('../controlers/dataBase.js')
let auth = require('../utils/auth.js').auth

const router = express.Router()

router.get("/all", auth, users_get_all)

router.get("/one/:id", users_get_one)

router.post("/register", users_post_register)

router.post('/login', users_post_login)

router.post('/code', users_post_code)

router.post('/checkIsadmin', users_post_checkIsAdmin)

router.post('/adminPanel', users_post_adminPanel)

// router.post('/deleteDataBase', dataBase_post_deleteAll)

module.exports = {router}