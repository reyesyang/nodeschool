'use strict';

function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(i) {
  console.log(i);
  return i + 1;
}

var promise = new Promise(function(reject, resolve) {
  var value = 1;

  for(var i = 0; i <= 10; i++) {
    value = iterate(value);

    if(i === 4) {
      alwaysThrows();
    }
  }
});

promise.catch(console.log);
