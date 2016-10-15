var express = require('express'); 
var path = require('path'); 
var shell = require('shelljs'); 
var bodyParser = require('body-parser'); 

//var index = require('./index'); 

var app = express(); 

app.use(express.static(__dirname)); 
app.use(bodyParser.urlencoded());


var router = express.Router(); 

router.post('/play', function(req, res){
  console.log("req : " + req.body); 
  console.log("req : " + req.prototype); 
  var link = req.body.link; 
  //shell.exec('vlc ' + link, {async:true}); 
  console.log(link); 
  //shell.exec('', {async:true}); 
  shell.exec('/Applications/VLC.app/Contents/MacOS/VLC ' + link, {async:true}); 
  res.status(200).end(); 
}); 

app.use(router); 

app.listen(3000, function(){
  console.log('listening on port', 3000); 
}); 

