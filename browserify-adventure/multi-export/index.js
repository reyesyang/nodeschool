var ndjson = require('./ndjson.js');

var string = prompt();
console.log(ndjson.parse(string));

var array = prompt();
console.log(ndjson.stringify(array));
