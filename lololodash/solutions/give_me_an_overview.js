var _ = require('lodash');

module.exports = function(items) {
  return _.chain(items).
    groupBy('article').
    reduce(function(prev, current, key) {
      console.log(prev, current, key);
      prev.push({
        article: parseInt(key),
        total_orders: _.reduce(current, function(total, item) {
          return total + item.quantity;
        }, 0)
      });

      return prev;
    }, []).
    sortBy((item) => -item.total_orders).
    value();
};
