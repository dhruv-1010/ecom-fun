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
// second route show the form to add a new prodcut error
router.get('/products/new',async (req,res)=>{
    res.render('products/new');
})
// third route post request
router.post('/products',async (req,res)=>{
    let {name ,img ,price ,desc}=  req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products');
})
// show a single product
router.get('/products/:id',async (req,res)=>{
    let {id}=req.params;
    let found = await Product.findById(id);
    // console.log(found);
    res.render('products/show',{found})
})
router.get('/products/:id/edit',async (req,res)=>{
    let {id} = req.params;
    let found = await Product.findById(id);
    // console.log("mika");
    res.render('products/edit',{found});
})


router.patch('/products/:id',async (req,res)=>{
    let { id }= req.params;
    let {name ,img ,price ,desc}=  req.body;
    await Product.findByIdAndUpdate(id,{name,desc,price,img});
    res.redirect('/products');
})
/*

/*
// route for editing
*/

// route for deleteing shit
router.delete('/products/:id',async (req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})








module.exports=router;