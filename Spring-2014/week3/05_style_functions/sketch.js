// Creating other HTML elements, adding style.

function setup() {
  noCanvas();
  var text = createP("This is an HTML string with style!");
  // With the style method we can pass in CSS directly in our code
  text.style("font-family", "monospace");
  text.style("background-color", "#FF0000");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
}


// Temporary until https://github.com/lmccart/p5.js/pull/354
function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}
