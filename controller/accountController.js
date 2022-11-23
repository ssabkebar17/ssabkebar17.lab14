/**
 * accountController.js
 */
"use strict";
const accountDAO = require("../dao/accountDAO") //import accountDAO
const Account = require("../model/account")//import account

const accountController = (function () {
        const getAccounts = function (req, res) {
            return accountDAO.getAccounts();
        }

const savaccount = function (req, res) {
    const id = accountDAO.getAccounts().length + 1;
    const accountNO = req.body.txtAccountNo;
    const customerName = req.body.txtCustomerName;
    const accountType = req.body.ddlAccountType;

    const account = new Account(id, accountNO, customerName, accountType);

return accountDAO.savaccount(account);
}   
return{
    getAccounts: getAccounts,
    savaccount: savaccount

}
})();
module.exports = accountController;