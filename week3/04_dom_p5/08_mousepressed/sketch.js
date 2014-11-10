// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

// Using p5 DOM element mouse listeners, mousePressed.

// Global variable for background color
var bg;

function setup() {
  createCanvas(400, 400);
  bg = color(51);

  var link = createA("#","Click me");
  // The function changeBG becomes a callback for when the mouse is pressed
  // On this DOM element (different than mousePressed() anywhere on page)
  link.mousePressed(changeBG);

}

function draw() {
  background(bg);
}

// This function is triggered when the mouse is pressed on the link
function changeBG() {
  bg = color(random(255));
}
