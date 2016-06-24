var http = require('http');

var server = http.createServer(function(req, res) {
  if(req.method != 'POST')
    return res.end('send me a POST\n')

  req.on('data', function(chunk) {
    res.write(chunk.toString().toUpperCase());
  });
 
  req.on('end', function() {
    res.end();
  })
});

server.listen(process.argv[2]);
