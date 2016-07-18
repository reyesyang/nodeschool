function *flat(array) {
  for(var i of array) {
    if(i instanceof Array) {
      yield *flat(i);
    } else {
      yield i;
    }
  }
}

var A = [1, [2, [3, 4], 5], 6];

for(var i of flat(A)) {
  console.log(i);
}
