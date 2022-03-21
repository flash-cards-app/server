let FlashCardsSchema = require ('../models/FlashCards.js').model
const LanguageTypeSchema = require ('../models/LanguageType').model
const DifficultTypeSchema = require('../models/DifficultType').model


const flashCards_post_createOne = async (req,res) =>{
    try {
        const {language,difficult,type,question,answear} = req.body
        const findLanguageType = await LanguageTypeSchema.findOne({language: language})
        const findDifficultType = await DifficultTypeSchema.findOne({difficult:difficult})

        const flashCard = new FlashCardsSchema({
            language: findLanguageType._id,
            difficult:findDifficultType._id,
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

const flashCards_post_languageType = (req,res) =>{
    try {
        const {language} = req.body
        const newLanguageType = new LanguageTypeSchema({
            language,
        })
        newLanguageType
        .save()
        .then( () => {
            res.statusCode = 200
            res.json({ succes: true, message: "Created new langugeType" })
        })
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const flashCards_post_difficultType = (req,res) =>{
    try {
        const {difficult} = req.body
        const newDifficultType = new DifficultTypeSchema({
            difficult,
        })
        newDifficultType
        .save()
        .then( () => {
            res.statusCode = 200
            res.json({ succes: true, message: "Created new difficultType" })
        })
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

const flashCards_get_byType = async (req,res) => {
    let selectedLanguage = req.query.type
    const findLanguageType = await LanguageTypeSchema.findOne({language: selectedLanguage})
    try {
        const flashCards = await FlashCardsSchema.find({"language":findLanguageType._id})
            res.json({ flashCards })
    }
    catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

module.exports = {flashCards_get_byType,flashCards_post_createOne,flashCards_post_languageType,flashCards_post_difficultType}