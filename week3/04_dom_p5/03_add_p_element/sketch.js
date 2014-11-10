// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {

  // In addition to making a canvas we can make other DOM elements
  // Like here is a paragraph element: <p>This is a paragraph element.</p>
  // By default these elements are appended to the <body>
  // Try reversing these two lines of code and see the difference
  var text = createP("This is a paragraph element.");
  var canvas = createCanvas(300, 200);

  // Here we call methods of each element to set the position and id, try changing these values.
  // Use the inspector to look at the HTML generated from this code when you load the sketch in your browser.
  text.id("apple");
  // If we wanted absolute positioning, if not the elements just "float" in the order they are created
  // canvas.position(300, 50);
  canvas.id("pear");
}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}
