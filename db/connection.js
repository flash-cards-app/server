let mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.DB_ADMIN_LOGIN}:${process.env.DB_ADMIN_PASSWORD}@cluster0.a22g5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connectDB = async() =>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log(`db connected :-)`)
 }

 module.exports = {connectDB}