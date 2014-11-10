// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {

  // If we don't want a canvas (p5 creates one by default even if you don't ask)
  noCanvas();

  // Make a paragraph element
  var text = createP("This is some stuff in a paragraph that is dynamically styled with style()");

  // With the style method we can pass in CSS directly in our code
  text.style("font-family", "monospace");
  text.style("background-color", "#FF69B4");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
}
