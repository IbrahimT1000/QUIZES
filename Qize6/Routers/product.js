const express = require("express");

const userProduct = express.Router();

const {addProduct} = require("../controller/product");


userProduct.post('/add',addProduct);
module.exports={userProduct};