var _ = require('lodash');

module.exports = function(items) {
  return _.chain(items).
    groupBy('username').
    reduce(function(prev, current, key) {
      prev.push({
        username: key,
        comment_count:  _.size(current)
      });

      return prev;
    }, []).
  sortBy((item) => -item.comment_count).
  value();
};
