// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

// Three variables to hold our DOM elements
var apple;
var banana;
var pear;

function setup() {
  noCanvas();
  // Instead of making the elements here we can just grab them 
  // via their id (see index.html)
  apple = getElement('apple');
  banana = getElement('banana');
  pear = getElement('pear');
}

// Hide and show them depending on what key was pressed
function keyPressed() {
  if (key == 'A') {
    apple.hide();
  } else if (key == 'B') {
    banana.hide();
  } else if (key == 'P') {
    pear.hide();
  } else if (key == ' ') {
    apple.show();
    banana.show();
    pear.show();
  }
}

