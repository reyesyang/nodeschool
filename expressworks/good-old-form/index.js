var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', function(req, res) {
  res.render('form');
});

app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
