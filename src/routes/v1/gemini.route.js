const express = require("express")
const controllers = require("../../controllers/v1")

const router = express.Router()

router.post("/getResponse", controllers.geminiController)

module.exports = router