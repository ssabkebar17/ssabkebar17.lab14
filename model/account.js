/**
 * account.js
 */"use strict";

 function Account(accountID ,accountNO,customerName,accountType){
     this.accountID = accountID;
     this.accountNO=accountNO;
     this.customerName=customerName;
     this.accountType=accountType;

 }
    module.exports = Account;