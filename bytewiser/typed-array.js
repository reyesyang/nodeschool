process.stdin.on('data', function(buffer) {
  var typedArray = new Uint8Array(buffer);
  console.log(JSON.stringify(typedArray));
});
