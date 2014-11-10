// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {

  // We can put other HTML stuff inside our DOM elements
  var text = createP("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!  ");

  // But p5 also has some functions to create specific elements like a link
  var link = createA("http://i.imgur.com/WXaUlrK.gif","We can also create a link this way.")
  
  var canvas = createCanvas(300, 200);

  // We can put the link element inside the paragraph one with child()
  text.child(link);
  // link.parent(child); // this is the equivalent
}



// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}

