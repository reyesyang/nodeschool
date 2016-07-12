var tr = require('./tr.js');
var fs = require('fs');

fs.createReadStream('./wake.txt').pipe(tr).pipe(process.stdout);
