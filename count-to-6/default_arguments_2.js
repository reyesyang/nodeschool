module.exports = function(string, exclamationNumber = string.length) {
  return string + '!'.repeat(exclamationNumber);
}
