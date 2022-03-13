let FlashCards = require ('../models/FlashCards.js').model


const flashCards_post_createOne = (req,res) =>{
    try {
        const {language,type,question,answear} = req.body
        console.log(language,type,question,answear)
        const flashCard = new FlashCards({
            language,
            type,
            question,
            answear,
        })
        flashCard
        .save()
        .then(flashCard => {
            res.statusCode = 200
            res.json({ succes: true, message: "Utworzono fiszkę", flashCard })
        })
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const flashCards_get_byType = async (req,res) => {
    let type = req.query.type
    try {
        const flashCards = await FlashCards.find({"language":type})
            res.json({ flashCards })
    }
    catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

module.exports = {flashCards_get_byType,flashCards_post_createOne}