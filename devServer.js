var path = require('path');
var express = require('express');

var app = express();

function log(message){
  console.log("[devServer] [", Date(), "] " + message)
}

app.get('/dist/*', function(req, res) {
  log("static request for " + req.url);
  // TODO: this is a stupid hack.
  var requestPath = req.url.substr(6).replace("..", "");
  if (requestPath.indexOf("//") < 0) {
    res.sendFile(path.join(__dirname, 'dist/' + requestPath));
  }
});

app.get('*', function(req, res) {
  log("request for " + req.url);
  // TODO: precompile react page
  res.sendFile(path.join(__dirname, 'dist/index-dev.html'));
});

app.listen(8900, 'localhost', function(err) {
  if (err) {
    log(err);
    return;
  }

  log('Listening at http://localhost:8900');
});
