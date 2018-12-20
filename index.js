const express=require('express')
const app=express()
const path =require('path');


app.use(express.static("public"));


app.get("/",(req,res)=>{
	res.sendFile(path.join(_dirname+"/index.html"))
})

app.get("/json",(req,res)=>{
	res.json({
		name:"josue"
	})
})
app.listen(8080,()=>{
	console.log("server listening")
})