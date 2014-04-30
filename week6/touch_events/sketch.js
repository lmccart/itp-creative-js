// touch events are very similar to mouse events

function setup() {
  createGraphics(1000, 1600); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}

var draw = function() {
  // keeps program looping even though it is empty
}

// mousePressed
var touchStarted = mousePressed = function() {
  var x = touchX || mouseX;
  var y = touchY || mouseY;
  fill(0, 255, 0);
  print('pressed or started');
  ellipse(x, y, 80, 80);
};

// mouseDragged
var touchMoved = function() {
  fill(0, 0, 255);
  ellipse(touchX, touchY, 80, 80);
};

// mouseReleased
var touchEnded = function() {
  fill(255, 0, 0);
  ellipse(touchX, touchY, 80, 80);
};
