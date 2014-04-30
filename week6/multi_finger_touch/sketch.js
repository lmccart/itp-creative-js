// touch events are very similar to mouse events

function setup() {
  createGraphics(1000, 1600); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}

function draw() {
  // keeps programming running even if empty
}

function touchStarted() {
  fill(0, 255, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

function touchMoved() {
  fill(0, 0, 255);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

function touchEnded() {
  fill(255, 0, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

