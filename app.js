const express = require("express");
const app=express();
const auth = require("./routes/auth");
const post = require("./routes/post");

app.use("/auth",auth);
app.use("/post",post);


app.listen(8000,()=>{
    console.log('server running on port 8000');
})

