var _ = require('lodash');

module.exports = function(items) {
  return _.sortBy(items, function(item) {
    return 1 / item.quantity;
  })
};
