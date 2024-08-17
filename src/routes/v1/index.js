const express = require('express');

const geminiRoute = require("./gemini.route")

const router = express.Router();

router.use("/gemini", geminiRoute)

module.exports = router;