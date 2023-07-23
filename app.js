const express = require('express');
const app = express();
const path=require('path');

const port = 8000



// setting path
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render("index");
})
// db connection 
// seedDB();
// now we need make an view to add data to db 

app.listen(port,()=>{
    console.log(`connected at port ${port}`)
}) 