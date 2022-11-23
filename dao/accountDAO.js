/**
 * accountDAO.js
 */
"use strict";

const Account = require("../model/account")

const AccountDAO = (function () {
const AccountDAO = [

    new Account(1,"1001", "John", "Savings"),
    new Account(2,"1002", "Mary", "Savings"),
    new Account (3,"1003", "Peter", "Savings"),
    new Account(4,"1004", "John", "Savings")
];

const getAccounts = function () {
    return AccountDAO;
}

const savaccount = function (account) {
    AccountDAO.push(account);
}

return {
    getAccounts: getAccounts,
    savaccount: savaccount
}


})();
module.exports = AccountDAO;