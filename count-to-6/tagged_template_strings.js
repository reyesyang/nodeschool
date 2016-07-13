function html(strings, ...values) {
  return values.reduce(function(prev, value, index) {
    prev.push(escape(value), strings[index + 1]);
    return prev;
  }, [strings[0]]).join('');
}

function escape(string) {
  return string.replace(/'|"|<|>|&/g, function(match) {
    return {
      "'": '&apos;',
      "\"": '&quot;',
      "<": '&lt;',
      ">": '&gt',
      "&": '&amp;'
    }[match];
  })
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
