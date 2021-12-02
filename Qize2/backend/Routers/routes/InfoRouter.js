const express = require("express");

const Router = express.Router();

const {getAllinfo} = require("../controllers/info");
const { Api } = require("../db");


Router.get('/',getAllinfo)

module.exports={Router};