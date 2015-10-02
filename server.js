var express = require('express');

var app = express();
var port = 3000;


// Set the public directory (index.html) location
app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Listening to port : " + port);