const express=require("express");
const auth=express.Router();


auth.get("/login",(req,res)=>{
res.send("<h3> <center> Hello User you have logged in ! </center> </h3>");
})

auth.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})



module.exports=auth;