function repeat(operation, num) {
  for(num; num > 0; num--) {
    operation();
  }
}

module.exports = repeat;
