/**
 * Processing > Ex > Topics > Interact > Follow3
 *
 * Follow 3  
 * based on code from Keith Peters. 
 * 
 * A segmented line follows the mouse. The relative angle from
 * each segment to the next is calculated with atan2() and the
 * position of the next is calculated with sin() and cos().
 *
 * Adapted by Evelyn Eastmond
 */

var x = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // **change** float[] x = new float[20] to be an array of 20 0's
var y = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // **change** float[] y = new float[20] to be an array of 20 0's
var segLength = 18;                                 // **change** float to var

function setup() {                          // **change** void setup() to function setup()
  createCanvas(640, 360);                 // **change** size() to createGrphics()
  strokeWeight(9);                          // strokeWeight() is the same
  stroke(255, 100);                         // stroke() is the same
}

function draw() {                           // **change** void draw() to function draw())
  background(0);                            // background() is the same
  dragSegment(0, mouseX, mouseY);           // functions calls, mouseX and mouseY are the same
  for(var i=0; i<x.length-1; i++) {         // **change** int i to var i
    dragSegment(i+1, x[i], y[i]);           // function calls are the same
  }
}

function dragSegment(i, xin, yin) {         // **change** void drawSegment() to fuction drawSegment(). remove type delcarations
  var dx = xin - x[i];                      // **change** float to var
  var dy = yin - y[i];                      // **change** float to var
  var angle = atan2(dy, dx);                // **change** float to var, atan2() is the same
  x[i] = xin - cos(angle) * segLength;      // cos() is the same
  y[i] = yin - sin(angle) * segLength;      // sin() is the same
  segment(x[i], y[i], angle);               // function calls are the same
}

function segment(x, y, a) {                 // **change** void segment() to function segment(). remove type delcarations
  pushMatrix();                             // pushMatrix() is the same
  translate(x, y);                          // translate() is the same
  rotate(a);                                // rotate() is the same
  line(0, 0, segLength, 0);                 // line() is the same
  popMatrix();                              // popMatrix() is the same
}