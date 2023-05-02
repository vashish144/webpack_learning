const express =require("express");
const path=require("path");
const fs=require("fs");
const app=express();

app.use('/',express.static(path.resolve(__dirname, '../dist')))

app.get('/',function(req,res){
    const pathToHtmlFile=path.resolve(__dirname,'../dist/image-caption.html');
    const contentFromHtmlFile=fs.readFileSync(pathToHtmlFile,'utf-8');
    res.send(contentFromHtmlFile)
})

app.listen(9003,function(){
    console.log("app is running on http://localhost:9003/")
})