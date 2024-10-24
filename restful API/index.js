const express = require('express');
const bodyParser = require('body-parser')
const app =express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies (e.g., form submissions)
app.use(bodyParser.json()); // Parses JSON request bodies
app.use(logger); 

// mimic the db using an array

let bloglist = [];

//how o define middleware

function logger(req,res,next){
    console.log(req.url);
    console.log(req.body);
    next();
};

function authentication(req,res,next){
    console.log("yes user is authenticated");
    next();
}
// how to use check below
app.get('/blogs' , authentication, (req,res)=>{
    console.log("hittttt");
    
    return res.status(404).json({
        data: bloglist,
        success : true
    });
});
// if we r not call next it will halt the api
app.post('/blogs',(req,res)=>{
    //console.log(req.body);  // returning undefined when try to hit from postman
    bloglist.push({
        title: req.body.title, 
        content: req.body.content,
        id : Math.floor(Math.random() * 1000)
    })
    return res.sendStatus(201).json({
        success : true,
    });
})
app.get('/blogs/:id', (req,res)=>{
    //console.log(req.params);
    const result = bloglist.filter((blog) => blog.id = req.params.id);
    return res.sendStatus(200).json({
        data: result,
        success: true
    })
})

app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const result = bloglist.filter(blog => blog.id !== blogId); // Filter out the blog with matching ID
    bloglist = result; // Update the bloglist with the filtered result

    return res.status(200).json({
        data: result,
        success: true
    });
});

app.listen(PORT, ()=>{
    console.log("server started on port", PORT);
    
});