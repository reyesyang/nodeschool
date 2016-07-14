var _ = require('lodash');

module.exports = function(tasks) {
  return _.filter(tasks, { active: true });
};
