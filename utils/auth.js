let jwt =require('jsonwebtoken')
let keys = require('../secret/keys.js').keys
let User = require('../models/User.js').User

const auth = (req,res,next) =>{
    try{

        if(!req.headers['authorization']){
            res.status(401).json({ message: 'Please authenticate' })
            return
        }

        // {
        //     "authorization": "Bearer asdasf11312312"
        // }

        const token = req.headers['authorization'].replace("Bearer ","" )
        const decoded = jwt.verify(token, keys.key)

        if(decoded){
            const {_id} = decoded
            User
                .findById(_id)
                .then((user)=>{
                    req.user = user
                    next()
                })
        }else{
            res.statusCode = 401
            res.json({message: "Unauthorized"})
        }
    }catch (error) {
        console.log(error)
        res.statusCode = 401
        res.json({message: "Unauthorized"})
    }
}

module.exports = {auth}