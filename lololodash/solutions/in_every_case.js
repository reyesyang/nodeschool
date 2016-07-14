var _ = require('lodash');

module.exports = function(citys) {
  return _.forEach(citys, function(city, key) {
    if(city.population >= 1) {
      city.size = 'big';
    } else if(city.population >= 0.5 && city.population < 1 ) {
      city.size = 'med';
    } else {
      city.size = 'small';
    }
  });
}
