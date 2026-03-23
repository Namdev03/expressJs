const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('succesfullly connected on 3000');
    
})
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.json({
        name:"namdev",
        age:23,
    });
    
});
app.get("/about",(req,res)=>{
    res.send("you are in about page");
    
});
app.get("/gallery",(req,res)=>{
    res.redirect('https://github.com/Namdev03?tab=repositories');
    
});
app.get("/about/user",(req,res)=>{
    res.send("you are in user page");
    
});
app.get("/random.text",(req,res)=>{
    res.send("you are in random page");
    
});
app.get("/about/user/:userid/book/:bookid",(req,res)=>{
    res.send(req.params);
    
});
app.get("/search",(req,res)=>{
    const name = req.query.name
    const age = req.query.age
   res.send(`search restults for name:${name}, age:${age}`);
    
});
app.get("/user",(req,res)=>{
 res.render('user')
});
