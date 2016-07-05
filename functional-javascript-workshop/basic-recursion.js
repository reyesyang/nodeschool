function reduce(arr, fn, initial) {
  // if(arr.length === 0)
  //   return initial;
  //
  // var head = arr[0];
  // var tail = arr.slice(1);
  // var result = fn(initial, head, initial, arr);
  //
  // return reduce(tail, fn, result);
  return (function reduceOne(index, value) {
    if(index > arr.length - 1)
      return value

    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
}

module.exports = reduce;
