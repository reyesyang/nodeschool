var stdin = process.stdin;
var stdout = process.stdout;

stdin.on('data', function(chunk) {
  stdout.write(chunk.toString().toUpperCase());
});

// stdin.on('end', function() {
//   stdout.end();
// });
