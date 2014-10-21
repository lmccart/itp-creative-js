// touch events are very similar to mouse events

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
}


// this line defines both touchStarted and mousePressed as the same function
var touchStarted = mousePressed = function() {
  
  // using or (||) means x and y will be set to whichever value is non-zero
  // on desktop they will take the mouseX/Y values, on mobile the touchX/Y values
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  fill(0, 255, 0);
  ellipse(x, y, 80, 80);
};

// this line defines both touchMoved and mouseDragged as the same function
var touchMoved = mouseDragged = function() {
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  fill(0, 0, 255);
  ellipse(x, y, 80, 80);
};

// this line defines both touchEnded and mouseReleased as the same function
var touchEnded = mouseReleased = function() {
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  fill(255, 0, 0);
  ellipse(x, y, 80, 80);
};

