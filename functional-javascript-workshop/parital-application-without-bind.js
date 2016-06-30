function logger(namespace) {
  return function() {
    var messages = Array.prototype.slice.call(arguments);
    messages.unshift(namespace);
    console.log.apply(null, messages);
  };
}

module.exports = logger;
