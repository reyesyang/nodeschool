'use strict';

var http = require('q-io/http');

var url = 'http://localhost:1337';
http.read(url).then(function(body) {
  console.log(JSON.parse(body));
}).done();
