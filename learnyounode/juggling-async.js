var http = require('http');
var results = [];
var finished = 0;
var number = 3;

function get(index) {
  http.get(process.argv[ 2 + index], function(response) {
    var content = '';
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      content += chunk;
    });

    response.on('end', function(){
      results[index] = content;
      finished += 1;

      if(finished === number)
        results.forEach(function(result) {
          console.log(result);
        });
    });
  });
}

for(var i = 0; i < number; i++) {
  get(i);
}
