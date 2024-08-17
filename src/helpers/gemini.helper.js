require("dotenv").config()
const { GoogleGenerativeAI } = require("@google/generative-ai")

const getModel = async () => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API)
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        })
        return model;
    } catch (error) {
        
    }
}

const geminiResponse = async (text, model) => {
    try {
        const result = await model.generateContent(text);
        const response = await result.response;
        const text_result = response.text();
        return text_result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

module.exports = {
    getModel,
    geminiResponse,
}