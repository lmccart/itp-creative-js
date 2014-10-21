
var r = 255;
var g = 0;
var b = 0;

function setup() {
  createCanvas(640,360);
}

function draw() {
  background(r,g,b);

  if (mouseIsPressed) {
     background(255);
  }

  if (mouseX > 100) {
     fill(0,0,255);
     rect(100,50,50,25); 
  }

  for (var i = 0; i < width; i+= 100) {
  	ellipse(i, 50,20,20);
  }

}

/////////////////////
// cd /path/to/directory/with/files
// python -m SimpleHTTPServer

// Type in browser:
// localhost:8000

