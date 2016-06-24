var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, filePaths) {
  if(error) throw error;

  var filteredFilePaths = filePaths.forEach(function(filePath) {
    if(path.extname(filePath) === '.' + process.argv[3])
      console.log(filePath);
  });
});
