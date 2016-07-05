function repeat(operation, num) {
  if(num <= 0) return;

  operation();

  return function() {
    repeat(operation, --num);
  }
}

function trampoline(fn) {
  while(fn && fn instanceof Function) {
    fn = fn();
  }

  return fn;
}

module.exports = function(operation, num) {
  return trampoline(repeat(operation, num));
}
