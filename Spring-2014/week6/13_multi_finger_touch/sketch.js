// touch events are very similar to mouse events

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}

function touchStarted() {
  fill(0, 255, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

function touchMoved() {
  for(var i = 0; i < touches.length; i++) {
    fill(i*50);
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

function touchEnded() {
  fill(255, 0, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}
