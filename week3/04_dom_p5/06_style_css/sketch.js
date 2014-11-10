// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {
  noCanvas();

  // Make a paragraph element
  var text = createP("This is some stuff in a paragraph that pulls its style from CSS via an id set by p5.");

  // Set its id (for which the styles are specified in style.css)
  text.id("apple");
}
