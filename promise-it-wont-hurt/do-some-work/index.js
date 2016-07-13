'use strict';

var http = require('q-io/http');
var sessionUrl = 'http://localhost:7000';
var databaseUrl = 'http://localhost:7001';

function fetchID() {
  return http.read(sessionUrl);
}

function fetchUser(id) {
  return http.read(databaseUrl + '/' + id);
}

fetchID().
  then(fetchUser).
  then(function(body) {
    console.log(JSON.parse(body));
  }).
  done();
