var express = require('express'); 
var path = require('path'); 
var shell = require('shelljs'); 

//var index = require('./index'); 

var app = express(); 

app.use(express.static(__dirname)); 

var router = express.Router(); 

router.post('/play', function(req, res){
  var link = req.link; 
  shell.exec('vlc ' + link, {async:true}); 
}); 

app.listen(3000, function(){
  console.log('listening on port', 3000); 
}); 

