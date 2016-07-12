module.exports = {
  parse: function(str) {
    return str.split('\n').map(function(line) {
      return JSON.parse(line);
    });
  },

  stringify: function(rows) {
    return rows.map(function(row) {
      return JSON.stringify(row);
    }).join('\n');
  }
};
