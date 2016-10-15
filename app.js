var express = require('express'); 
var path = require('path'); 

//var index = require('./index'); 

var app = express(); 

app.use(express.static(__dirname)); 

app.listen(3000, function(){
  console.log('listening on port', 3000); 
}); 
