const express = require('express');
const path = require('path')

const app = express();
const port = 5000;

app.use('/', express.static(__dirname ));
//endpoints
app.get('/',(req,res)=>{
    res.render(path.join(__dirname,'/index.html'));
})

app.get('/success.html',(req,res)=>{
    res.render(path.join(__dirname,'/success.html'));
})

//server
app.listen(port,(error)=>{
    if(error){
        console.log("not running");
    }
    else{

        console.log("Server running successfully");
    }
})