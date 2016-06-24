var fs = require('fs');
var path = require('path');


function filterFilePaths(directory, extname, callback) {
  fs.readdir(directory, function(error, filePaths) {
    if(error)
      return callback(error);

    var filteredFilePaths = filePaths.filter(function(filePath){
      return path.extname(filePath) === '.' + extname;
    });

    callback(null, filteredFilePaths);
  });
}

module.exports = filterFilePaths;
