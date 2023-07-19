const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = [
    {
        name:"Iphone 14 pro",
        img:"https://images.unsplash.com/photo-1678533511793-3e4098b854e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price:139990,
        desc:"this is iphone 14 and its so good !!! "
    },
    {
        name:"Apple Mac pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:209990,
        desc:"this is mac pro  and its so good !!! "
    },
    {
        name:"Apple ipad mini",
        img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZCUyMG1pbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price:56990,
        desc:"this is mac mini  and its so good !!! "
    },
    {
        name:"Iphone 14 pro",
        img:"https://images.unsplash.com/photo-1678533511793-3e4098b854e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price:139990,
        desc:"this is iphone 14 and its so good !!! "
    },
    {
        name:"Apple Mac pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:209990,
        desc:"this is mac pro  and its so good !!! "
    },
    {
        name:"Apple ipad mini",
        img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZCUyMG1pbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price:56990,
        desc:"this is mac mini  and its so good !!! "
    },
    {
        name:"Iphone 14 pro",
        img:"https://images.unsplash.com/photo-1678533511793-3e4098b854e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price:139990,
        desc:"this is iphone 14 and its so good !!! "
    },
    {
        name:"Apple Mac pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:209990,
        desc:"this is mac pro  and its so good !!! "
    },
    {
        name:"Apple ipad mini",
        img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZCUyMG1pbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price:56990,
        desc:"this is mac mini  and its so good !!! "
    }
];


async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded")
}
module.exports=seedDB