/**
 * Processing > Ex > Basics > Form > Bezier
 *
 * Bezier. 
 * 
 * The first two parameters for the bezier() function specify the 
 * first point in the curve and the last two parameters specify 
 * the last point. The middle parameters set the control points
 * that define the shape of the curve.
 *
 */

function setup() {           // **change** void setup() to var setup = function()
  createCanvas(640, 360);  	 // **change** size() to createCanvas()
  stroke(255);               // stroke() is the same
  noFill();                  // noFill() is the same
}

function draw() {                         // **change** void draw() to var setup = draw()
  background(0);                          // background() is the same
  for (var i = 0; i < 200; i += 20) {     // **change** int i to var i
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0)); // bezier() is the same
  }
}
