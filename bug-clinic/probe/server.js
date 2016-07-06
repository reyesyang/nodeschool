var http = require('http');
var trace = require('jstrace');

var server = http.createServer(function(req, res) {
  trace("request:start", { url: req.url });

  var status, body;
  if(req.url === '/prognosis' && req.method === 'GET') {
    status = 200;
    body = { ok: true };
  } else {
    status = 404;
    body = { error: 'notfound' };
  }

  res.writeHead(status, {
    'content-type': 'application/json'
  });

  res.end(JSON.stringify(body));

  trace("request:end", { statusCode: status, body: body });
});

server.listen('9999', function() {
  console.log('Server listen on 9999 now!');
})
