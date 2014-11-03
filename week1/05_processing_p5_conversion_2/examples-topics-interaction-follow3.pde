/**
 * Follow 3  
 * based on code from Keith Peters. 
 * 
 * A segmented line follows the mouse. The relative angle from
 * each segment to the next is calculated with atan2() and the
 * position of the next is calculated with sin() and cos().
 */

float[] x = new float[20];                       // **change** array of 0's to be float[] x = new float[20]
float[] y = new float[20];                       // **change** array of 0's to be float[] x = new float[20]
float segLength = 18;                            // **change** var to float

void setup() {                                   // **change** var setup = function() to void setup() 
  size(640, 360);                                // **change** createGraphics() to size()
  strokeWeight(9);
  stroke(255, 100);
}

void draw() {                                    // **change** var draw = function() void draw()
  background(0);
  dragSegment(0, mouseX, mouseY);
  for(int i=0; i<x.length-1; i++) {              // **change** int i to var i
    dragSegment(i+1, x[i], y[i]);
  }
}

void dragSegment(int i, float xin, float yin) {  // **change** var drawSegment() = function to void drawSegment(). add type delcarations.
  float dx = xin - x[i];                         // **change** var to float
  float dy = yin - y[i];                         // **change** var to float
  float angle = atan2(dy, dx);                   // **change** var to float
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

void segment(float x, float y, float a) {        // **change** var segment = function() to void segment(). add type delcarations.
  pushMatrix();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  popMatrix();
}



