var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  if(err) throw err;

  data.toString().split('\n').forEach(function(line) {
    console.log(Buffer.from(line));
  });
});
