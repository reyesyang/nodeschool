var Transform = require('stream').Transform;
var sprintf = require('sprintf');
var fs = require('fs');
var path = require('path');
var StringDecoder = require('string_decoder').StringDecoder;
var quote = require('quote-stream');
var decoder = new StringDecoder();
var combine = require('stream-combiner2')

var split = new Transform({
  transform: function(chunk, encoding, callback) {
    var data = decoder.write(chunk);
    if(this.lastLine) {
      data = this.lastLine + data;
    }

    var lines = data.split('\n');
    this.lastLine = lines.pop();

    lines.forEach(this.push.bind(this));

    callback();
  },

  flush: function(callback) {
    if(this.lastLine) {
      this.push(this.lastLine);
      this.lastLine === null;
    }

    callback();
  }
})

module.exports = function(file) {
  if(path.extname(file) !== '.txt') {
    return new Transform({
      transform: function(chunk, encoding, callback) {
        this.push(chunk);
        callback();
      }
    });
  }
  
  var lineNumber = 0;
  var rs = fs.createReadStream(file);
  var liner = new Transform({
    transform: function(chunk, encoding, callback) {
      var line = chunk.toString() + '\n';
      
      if(lineNumber % 5 === 0) {
        this.push(sprintf('%3d %s', lineNumber, line));
      } else {
        this.push('    ' + line);
      }

      lineNumber++;
      callback();
    }
  });

  var prefix = new Transform({
    transform: function(chunk, encoding, callback) {
      this.data = this.data + chunk.toString();
      this.push();
      callback();
    },
    flush: function(callback) {
      this.push(this.data + '\n');
      // console.log(this.data);
      this.data = null;
      callback();
    }
  });

  prefix.data = 'module.exports = ';

  return split.pipe(liner).pipe(quote()).pipe(prefix);
  // return combine([split, liner, quote(), prefix]);
};
