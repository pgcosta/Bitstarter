var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  index=fs.readFileSync("index.html")
  response.send(index.toString());
});

//x = expr1 || expr2
//x = expr1 if expr1=true else = expr2
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
