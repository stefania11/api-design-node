// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

// this will send back the index.html file on a GET request to '/'
app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html', function(err){
    if (err){
      res.status(500).send(err);
    }
  })
});

app.get('/data', function(req,res){
  res.json(jsonData);
});

var port = 4000;
app.listen(port,function(){
  console.log('listening on http://localhost:', port);
});
