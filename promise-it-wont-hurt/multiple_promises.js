'use strict';

function all(...promises) {
  // console.log(promises);


  return new Promise(function(fulfill, reject) {
    var counter = 0;
    var values = [];
    var promiseCount = promises.length;

    promises.forEach(function(promise, index) {
      promise.then(function(value) {
        values[index] = value;

        if(++counter === promiseCount) {
          fulfill(values);
        }
      }).catch(reject);
    })
  });
}

module.exports = all;
