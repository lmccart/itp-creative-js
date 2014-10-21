// Creating other HTML elements, adding style.


function setup() {
  noCanvas();
  var text = createP("This is an HTML string with style!");
  text.id("apple");
}


// Temporary until https://github.com/lmccart/p5.js/pull/354
function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}
