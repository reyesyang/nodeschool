var input = '';

process.stdin.on('data', function(chunk) {
  input += chunk.toString();
});

process.stdin.on('end', function() {
  input.split('\n').forEach(function(line, index) {
    if(index % 2 === 0) {
      result = line.toLowerCase();
    } else {
      result = line.toUpperCase();
    }

    process.stdout.write(result + '\n');
  });
});
