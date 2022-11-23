/**
 * accountRouter.js
 */
"use strict";
const express = require("express");
const path = require("path");


const accountController = require("../../controller/accountController");

const accountRouter = express.Router();


accountRouter.get("/" , (req, res) => {
    const accounts = accountController.getAccounts(req, res);
    console.log(accounts);
    res.render("account", {accounts: accounts});

   // res.sendFile(path.join(__dirname, "../../views", "account.html"));



});
accountRouter.post("/add", (req, res) => {
    console.log(req.body);
    const account = accountController.savaccount(req, res);
    res.redirect("/account");

});


module.exports = accountRouter;