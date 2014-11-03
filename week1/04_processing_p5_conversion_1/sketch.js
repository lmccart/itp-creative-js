/**
 * Processing > Ex > Basics > Color > RadialGradient
 * 
 * Radial Gradient. 
 * 
 * Draws are series of concentric circles to create a gradient 
 * from one color to another.
 */

var dim;                                // change int to var

function setup() {                      // change void to function
  createCanvas(640, 360);               // change size to createCanvas
  dim = width/2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {                       // change void to function
  background(0);
  for (var x = 0; x <= width; x+=dim) { // change int to var
    drawGradient(x, height/2);
  } 
}

function drawGradient(x, y) {           // change void to function, remove datatypes
  var radius = dim/2;                   // change int to var
  var h = random(0, 360);               // change float to var
  for (var r = radius; r > 0; --r) {    // change int to var
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
