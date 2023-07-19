const mongoose = require('mongoose');
// schema
const productSchema = new mongoose.Schema({
        name:{
            type:String,
            trim:true,
            required:true
        },
        img:{
            type:String,
            trim:true,
        },
        price:{
            type:Number,
            required:true,
            min:0
        },
        desc:{
            type:String,
            trim:true
        }
})
// model
const Product = mongoose.model('Product',productSchema);

module.exports = Product;