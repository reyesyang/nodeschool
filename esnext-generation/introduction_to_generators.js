module.exports = function* (isEven) {
  var result = isEven ? 0 : -1;

  while(true) {
    yield (result += 2);
  }
}
