const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("HELLO THERE");
})

app.listen(3000, function(){
    console.log("LISTENING ON PORT #$");
})