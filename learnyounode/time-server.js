var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var now = strftime('%Y-%m-%d %H:%M');

  socket.end(now + '\n');
});

server.listen(process.argv[2]);
