module.exports = Widget;

function Widget() {
  if(!(this instanceof Widget)) return new Widget;
  this.div = document.createElement('div');
  this.div.innerHTML = 'Hello <span class="name"></span>!';
}

Widget.prototype.setName = function(name) {
  this.div.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function(dom) {
  dom.appendChild(this.div);
};
