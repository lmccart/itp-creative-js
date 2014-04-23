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

  document.addEventListener('facetrackingEvent', drawFace);
}

function draw() {
  background(255, 0, 200);
  noStroke();
  fill(0);
  ellipse(x,y,w,h);
}

// We might want to just set variable values here
// and do the actual drawing
function drawFace(event) {
  x = event.x;
  y = event.y;
  w = event.width;
  h = event.height;
}