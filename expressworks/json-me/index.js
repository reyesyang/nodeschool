var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if(err) res.sendStatus(500);

    try {
      var books = res.json(JSON.parse(data));
      res.json(books);
    } catch(e) {
      res.sendStatus(500);
    }
  });
});

app.listen(process.argv[2]);
