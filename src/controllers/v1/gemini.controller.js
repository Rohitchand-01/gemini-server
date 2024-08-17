const geminiService = require("../../services/v1/gemini.services")

const generateResponse = async (req, res) => {
    try {
        const {text} = req.body
        const response = await geminiService.generateResponseService(text)

        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json("Error Response from gemini service")
    }
}

module.exports = generateResponse