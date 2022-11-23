/**
 * homeRouter.js
 */
"use strict";

const express = require("express");
const path = require("path");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
homeRouter.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
module.exports = homeRouter;