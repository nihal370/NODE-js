const express=require('express')
const app=express()
app.get("/home",(req,res)=>{
res.status(200).json({success:true})
})
app.get("*",(req,res)=>{
  res.send("welcome")
})
app.listen(8000,()=>{
console.log("listening..");
})
