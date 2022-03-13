const express = require('express')
const cors = require('cors')
let usersRouter = require('./routes/users.js').router
let flashCardsRouter = require('./routes/flashCards.js').router
let quizRouter = require('./routes/quiz.js').router
let connectionDB = require('./db/connection.js').connectDB
let User = require('./models/User.js').User

const port = process.env.PORT || 3001
const app = express()


connectionDB()

app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})
app.use(express.json())
const auth = (req,res, next) =>{
    next()
}

app.get("/",auth, (req,res)=>{
    res.send(`<h1>Strona główna - ${req.username}</h1>`)
})

app.get("/find", async (req,res)=>{
    const users = await User.find()
    console.log(users)
})


app.use("/users", usersRouter)

app.use('/flashCards', flashCardsRouter)
app.use('/quiz', quizRouter)


app.use((req,res)=>{
    res.status(404).send('cant find this page')
})


app.listen(port, () => {
    console.log("Serwer " + port)
})