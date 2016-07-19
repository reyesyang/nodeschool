var tape = require('tape');
var fancify = require(process.argv[2]);

tape('fancify', function(t) {
  t.equal(fancify('Hello'), '~*~Hello~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~');
  t.equal(fancify('Hello', true, '!'), '~!~HELLO~!~');
  t.end();
});
