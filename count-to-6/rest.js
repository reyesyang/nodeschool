module.exports = function(...args) {
  var sum = args.reduce(function(prev, current) {
    return prev + current;
  }, 0);

  return sum / args.length;
}
