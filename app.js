const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

})

app.listen(process.env.PORT || 8000,function(){
    console.log("srever is running on port 8000");
})