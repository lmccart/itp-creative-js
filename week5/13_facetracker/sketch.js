// https://github.com/auduno/headtrackr
// http://auduno.github.io/headtrackr/documentation/reference.html

var x,y,w,h;

function setup() {
  createCanvas(320, 240);

  var videoInput = document.getElementById('inputVideo');
  var canvasInput = document.getElementById('debugCanvas');

  var htracker = new headtrackr.Tracker({ui: false, debug: canvasInput});
  htracker.init(videoInput, canvasInput);
  htracker.start();
  
  // drawFace() is a callback for when facetracker finds the face
  document.addEventListener('facetrackingEvent', drawFace);
}

function draw() {
  background(255, 0, 200);
  noStroke();
  fill(0);
  ellipse(x,y,w,h);
}

// Taking the face data and copying over to global variables
// This will only work for one face
function drawFace(event) {
  x = event.x;
  y = event.y;
  w = event.width;
  h = event.height;
}