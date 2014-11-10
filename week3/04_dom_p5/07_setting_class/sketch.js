// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

// Three elements
var elt0;
var elt1;
var elt2;

function setup() {
  
  noCanvas();
  
  // Three floating elements
  elt0 = createDiv("Here's a div.");
  elt1 = createDiv("Here's another div.");
  elt2 = createDiv("Oh and even another one!");
  
  // Let's give the first two elements class donkey, and the third class yogurt.
  elt0.class('donkey');
  elt1.class('donkey');
  elt2.class('yogurt');
};






