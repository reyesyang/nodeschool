var url = require('url');
var querystring = require('querystring');

var addr = prompt();
var urlObj = url.parse(addr);
var query = querystring.parse(urlObj.query);

console.log(url.resolve(addr, query.file));
