var all = require('./multiple_promises.js');

all(Promise.resolve(1), Promise.resolve(2)).then(console.log).catch(console.log);
