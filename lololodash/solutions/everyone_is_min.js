var _ = require('lodash');

function hot(temps) {
  return _.every(temps, function(temp) {
    return temp > 19;
  });
}

function warm(temps) {
  return _.some(temps, function(temp) {
    return temp > 19;
  });
}

module.exports = function(items) {
  var result = {
    hot: [],
    warm: []
  };

  _.forEach(items, function(temps, city) {
    if(hot(temps)) {
      result.hot.push(city);
    } else if(warm(temps)) {
      result.warm.push(city);
    }
  });

  return result;
};
