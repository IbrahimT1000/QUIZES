const express = require("express");

const userAccount = express.Router();

const {getinfo} = require("../controller/account");


userAccount.post('/getinfo',userAccount);
module.exports={userAccount};