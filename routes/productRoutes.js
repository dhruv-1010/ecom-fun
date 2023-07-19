const express = require('express');
const Product = require('../models/Product');

// express router acts like mini server
const router = express.Router();
// display all the product
router.get('/products',async (req,res)=>{
    // finding all the products
    let products =  await Product.find({});
    res.render('products/index',{products})
})











module.exports=router;