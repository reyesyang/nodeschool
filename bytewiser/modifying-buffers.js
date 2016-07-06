process.stdin.on('data', function(buffer) {
  buffer.write(buffer.toString().replace(/\./g, '!'));
  console.log(buffer);
});
