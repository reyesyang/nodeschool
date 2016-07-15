module.exports = function(iterable) {
  var result = [];

  for(var value of iterable) {
    if(typeof value === 'number') {
      result.push(value);
    }
  }

  return result;
};
