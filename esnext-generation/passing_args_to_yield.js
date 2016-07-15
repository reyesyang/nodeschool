module.exports = function* (isEven) {
  var num = 1;
  var value = 1;

  while(true) {
    var result = num++ * value;
    value = (yield result) || 1;
  }
}
