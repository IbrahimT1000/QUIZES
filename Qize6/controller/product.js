
const express = require('express')
const mongoose= require("mongoose")


const saveproduct=(productName,productPrice)=>{
    const newProduct= new products({
        productName,
        productPrice,
    })

    
    newProduct.save()
   .then(res=>{
       console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}
saveproduct("pincle",25)