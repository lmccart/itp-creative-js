// touch events are very similar to mouse events

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}

// mousePressed
function touchStarted() {
  var x = touchX || mouseX;
  var y = touchY || mouseY;
  fill(0, 255, 0);
  print('pressed or started');
  ellipse(x, y, 80, 80);
}

// mouseDragged
function touchMoved() {
  fill(0, 0, 255);
  ellipse(touchX, touchY, 80, 80);
}

// mouseReleased
function touchEnded() {
  fill(255, 0, 0);
  ellipse(touchX, touchY, 80, 80);
}
