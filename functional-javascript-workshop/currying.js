function curryN(fn, n) {
  n = n || fn.length;

  return function(arg) {
    if(n === 1) {
      return fn(arg); 
    } else {
      return curryN(fn.bind(this, arg), n - 1);
    }
  }
}

module.exports = curryN;

// test
//
// function add(a, b) {
//   return a + b;
// }
//
// var curry = curryN(add, 2)
// var curryA = curry(1)
//
// console.log(curryA(4))
// console.log(curryA(7))
