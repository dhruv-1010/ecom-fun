require('dotenv').config();
const express = require('express');
const app = express();
const path=require('path');
const methodover = require('method-override')
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes');




// setting path
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));//body parser
app.use(methodover('_method'))
// 

// 
app.use(productRoutes);

mongoose.connect(process.env.DB_URL).
then(()=>{
    console.log('db conneted');})
.catch((err)=>{
    console.log('error');
});

// db connection 
// seedDB();
// now we need make an view to add data to db 

app.listen(port,()=>{
    console.log(`connected at port ${port}`)
}) 