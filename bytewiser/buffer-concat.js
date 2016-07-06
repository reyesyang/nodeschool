var bufferList = [];

process.stdin.on('data', function(buffer) {
  bufferList.push(buffer);
});

process.stdin.on('end', function() {
  console.log(Buffer.concat(bufferList));
});
