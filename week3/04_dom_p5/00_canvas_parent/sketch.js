// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {
  // Here we can store a reference to the canvas DOM element
  var canvas = createCanvas(300, 200);
  // And do things like place it in a div by its id (see the HTML file)
  canvas.parent("canvasContainer");
}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}