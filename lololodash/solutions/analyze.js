var _ = require('lodash');

module.exports = function(items) {
  var average = _.reduce(items, function(acc, current) {
    return acc + current.income;
  }, 0) / items.length;

  var underperform = _.chain(items).filter(function(item) {
    return item.income <= average;
  }).sortBy('income').value();

  var overperform = _.chain(items).filter(function(item) {
    return item.income > average;
  }).sortBy('income').value();

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};
