let mongoose =require('mongoose')
let jwt =require('jsonwebtoken')
let keys = require('../secret/keys.js').keys
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = function() {
    const {_id} = this
    const token = jwt.sign({_id}, keys.key, {expiresIn: "1d"})
    return token
}

const User = mongoose.model("User", userSchema)

module.exports = {User}