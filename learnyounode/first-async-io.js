var fs = require('fs');

function countLine(error, content) {
  if (error) throw error;

  var lines = content.split('\n').length - 1;
  console.log(lines);
}

fs.readFile(process.argv[2], 'utf8', countLine);
