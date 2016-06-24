var http = require('http');
var url = require('url');

server = http.createServer(function(req, res) {
  var urlInfo = url.parse(req.url, true);
  var date = new Date(urlInfo.query.iso);

  switch(urlInfo.pathname) {
    case '/api/parsetime':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      res.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }));

      break;
    case '/api/unixtime':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        unixtime: date.getTime()
      }));
      
      break;
    default:
      res.writeHead(404);
      res.end('Not Found\n');
  }
});

server.listen(process.argv[2]);
