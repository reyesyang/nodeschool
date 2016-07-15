module.exports = function(isEven) {
  var result = isEven ? 0 : -1;

  return {
    next: function(swap) {
      return {
        value: result += (swap ? 1 : 2),
        done: false
      };
    }
  }
}
