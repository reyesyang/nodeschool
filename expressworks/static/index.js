var express = require('express');
var path = require('path');

var app = express();
var staticPath = process.argv[3] || path.join(__dirname, 'public');

app.use(express.static(staticPath));
app.listen(process.argv[2]);
