const express = require("express")

var app = express();

app.listen(3456,()=>{
    console.log("hello server started")
})

app.get("/",(req,res)=>{
    res.send("hello world")
})