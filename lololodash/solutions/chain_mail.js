var _ = require('lodash');

module.exports = function(items) {
  return _.chain(items).
    map((item) => (item + 'chained').toUpperCase()).
    sortBy().
    value();
}
