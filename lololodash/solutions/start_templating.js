var _ = require('lodash');

module.exports = function(data) {
  return  _.template('Hello <%= name %> (logins: <%= login.length %>)')(data);
};
