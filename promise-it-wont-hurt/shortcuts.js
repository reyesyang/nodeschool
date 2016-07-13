var resolve = Promise.resolve('RESOLVE');
resolve.then(console.log)

var reject = Promise.reject('REJECT');
reject.catch(console.log)
