// touch events are very similar to mouse events

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}


// define functions used for both touch and mouse
function drawGreen(x, y) {
  fill(0, 255, 0);
  ellipse(x, y, 80, 80);
}

function drawRed(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 80, 80);
}

function drawBlue(x, y) {
  fill(0, 0, 255);
  ellipse(x, y, 80, 80);
}

// hook functions up to touches
var touchStarted = mousePressed = function() {
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  drawGreen(x, y);
};

var touchMoved = mouseDragged = function() {
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  drawBlue(x, y);
};

var touchEnded = mouseReleased = function() {
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  drawRed(x, y);
};

