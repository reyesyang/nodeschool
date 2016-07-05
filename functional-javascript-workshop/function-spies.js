module.exports = function(target, method) {
  var origin_method = target[method];
  var result = {
    count: 0
  }; 

  target[method] = function() {
    result.count++;
    origin_method.apply(this, arguments);
  };

  return result;
};
