const { getModel, geminiResponse } = require("../../helpers/gemini.helper")

const generateResponseService = async (query) => {
    try {
        const model = await getModel();
        const response = await geminiResponse(query, model);

        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    generateResponseService
}