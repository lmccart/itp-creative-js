// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {
  // Here we can store a reference to the canvas DOM element
  var canvas = createCanvas(600, 400);
  // And do things like give it an absolute position on the page
  canvas.position(50, 50);
}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}