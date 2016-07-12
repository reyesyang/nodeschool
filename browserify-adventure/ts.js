var Transform = require('stream').Transform;

var ts = new Transform({
  transform: function(chunk, encoding, callback) {
    var data = chunk.toString() + 'node\n';
    this.push(data);
    callback();
  }
});

process.stdin.pipe(ts).pipe(process.stdout);
