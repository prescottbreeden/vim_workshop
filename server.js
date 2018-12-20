var express = require('express');
var app = express();
var bp = require('body-parser');
var controllers = require('./controllers');
var port = 8080;

app.use('/', function(req, res) {
  res.send("Javascript is cool!")
});

app.get('/users', controllers.getAll);
app.get('/users/:id', controllers.getOne);
app.post('/', controllers.create);
app.put('/', controllers.update);
app.delete('/', controllers.delete);

app.listen(port, function() {
  console.log("listening on port" + port)
});

