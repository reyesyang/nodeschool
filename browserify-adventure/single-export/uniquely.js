var uniq = require('uniq');

module.exports = function(string) {
  return uniq(string.split(','))
};
