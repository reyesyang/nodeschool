var tape = require('tape');
var feedCat = require(process.argv[2]);

tape('feedCat with chocolate', function(t) {
  t.plan(2);

  t.equal(feedCat('fish'), 'yum');
  t.throws(function() {
    feedCat('chocolate');
  })
});
