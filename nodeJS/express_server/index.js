const express = require('express');
// create an express app objext by calling the express func

const app = express();
const PORT = 3000;

app.get('/home',function(req,res){
    res.send("hello avi")
})

app.post('/home', function (req,res){
    res.send("welcome avi")
})

app.patch('/home', function(req,res){
    app.send("nice avi u are learning")
})
app.listen(PORT , function process(){
    console.log("SERVER STATING");
    
})