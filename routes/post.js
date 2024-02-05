const express=require("express");
const Post = express.Router();


const colors =[{
    name:'red',
    id:1},
{
name:'blue',
id:2
},
]



Post.get('/all',(req,res)=>{
    res.send(colors);
})


Post.get('/:id',(req,res)=>{
    const color_id = parseInt(req.params.id);
    const colorById=colors.find(colors=>colors.id === color_id);
    res.send(colorById);
});



module.exports=Post;