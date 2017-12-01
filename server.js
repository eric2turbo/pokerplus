var express = require('express');
var app = express();

app.use(express.static(__dirname +'./public/')); //serves the index.html
app.listen(3000);