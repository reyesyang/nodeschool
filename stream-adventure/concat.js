var input = '';
process.stdin.on('data', function(chunk) {
  input += chunk.toString();
});

process.stdin.on('end', function() {
  process.stdout.write(input.split('').reverse().join(''));
});
