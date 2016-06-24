var filterFilePaths = require('./filter-files-module.js');

filterFilePaths(process.argv[2], process.argv[3], function(error, filePaths) {
  if(error) throw error;

  filePaths.forEach(function(filePath) {
    console.log(filePath);
  });
});
