function* upper(items) {
  for(var str of items) {
    try {
      yield str.toUpperCase();
    } catch(err) {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for(var item of upper(bad_items)) {
  console.log(item);
}
