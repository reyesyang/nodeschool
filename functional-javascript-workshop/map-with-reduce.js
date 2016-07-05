module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(result, value) {
    result.push(fn(value));
    return result;
  }, []);
};
