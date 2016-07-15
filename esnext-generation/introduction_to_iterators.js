module.exports = function makeCounter(someObj) {
  var count = 1;
  var done = false;

  someObj.next = function() {
    if(count > 10) {
      done = true;
    }

    return {
      value: count++,
      done: done
    };
  }
}
