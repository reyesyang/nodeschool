var http = require('http');

var options = {
  host: 'localhost',
  port: 8099,
  method: 'POST',
}

// var options = {
//   host: 'baidu.com',
//   port: 80,
//   method: 'POST',
// }

var req = http.request(options, function(res) {
  res.pipe(process.stdout);
});

process.stdin.on('data', function(chunk) {
 req.write(chunk.toString());
});

process.stdin.on('end', function() {
  req.end();
});
