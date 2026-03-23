const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('succesfullly connected on 3000');
    
})
app.get("/",(req,res)=>{
    res.send("you are in home page");
    
});
app.get("/about",(req,res)=>{
    res.send("you are in about page");
    
});
app.get("/gallery",(req,res)=>{
    res.send("you are in gallary page");
    
});
app.get("/about/user",(req,res)=>{
    res.send("you are in user page");
    
});
app.get("/random.text",(req,res)=>{
    res.send("you are in random page");
    
});
app.get("/about/user/:userid",(req,res)=>{
    res.send(req.params);
    
});