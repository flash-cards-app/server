const LanguageTypeSchema = require('../models/LanguageType.js').model

const languageTypes_get_all = async (req, res) => {
    try {
        const languageTypes = await LanguageTypeSchema.find()
        res.json({ languageTypes })
    }
    catch (error) {
        res.statusCode = 500
        res.json({ error: error.toString() })
    }
}

module.exports = {languageTypes_get_all}