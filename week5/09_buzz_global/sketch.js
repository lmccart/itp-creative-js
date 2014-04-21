// Combinging a third-party JS library with a sketch
// Just use the normal third-party JS library code
// Usually, you want to use the third-party code in setup
// Unless you'd like to use things in certain event functions like mousePressed
// Look at the API page for more things a library can do:
// http://buzz.jaysalvat.com/documentation/sound/

// Initializing a variable using the third-party library buzz object
var mySound = new buzz.sound('rhodes_loop.wav');
var radius = 50;

function setup() {
  createCanvas(300, 300);
  noStroke();
  fill(0);
}

function draw() {
  background(255, 0, 200);
  ellipse(width/2, height/2, 2*radius, 2*radius);
}

function mousePressed() {
  if (dist(mouseX, mouseY, width/2, height/2) <= radius) {
    mySound.play(); // Start playing the sound
    mySound.loop(); // Loop the sound once it's playing
  }
}

function mouseReleased() {
  mySound.stop(); // Stop the sound
}

