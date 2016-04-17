var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/portfolio', function(req,res){
  res.sendFile(__dirname + '/public/portfolio.html');
});

app.get('/team', function(req,res){
  res.sendFile(__dirname + '/public/team.html');
});

app.get('/', function (req, res) {
  res.send('root');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
