let Quiz = require ('../models/FlashCards.js').model

const quiz_get_byType = async (req,res) => {
    let type = req.query.type
    try {
        const quiz = await Quiz.find({"language":type})
            res.json({ quiz })
    }
    catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

module.exports = {quiz_get_byType}