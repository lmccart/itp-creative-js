// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js
// Creating other HTML elements, adding style.

function setup() {
  noCanvas();

  var link = getElement("clicky");
  link.mousePressed(shuffle);
}


function shuffle() {
  // Get an array of elements of the same class
  var apples = getElements("apple");
  // Do something to all of them
  for (var i=0; i<apples.length; i++) {
    apples[i].position(random(windowWidth),random(windowHeight));
  }
}

