require("dotenv").config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const v1Router = require('./routes/v1');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
        origin: [
            "http://localhost:5173",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

app.use("/v1", v1Router)

app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to gemini backend!!!");
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = app