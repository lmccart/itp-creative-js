var lines;

function preload() {
  lines = loadStrings("lines.txt");
}

function setup() {
  createCanvas(600, 400);
  //lines = loadStrings("lines.txt"); // doesn't load in time
  textSize(20);
  fill(0);
  noLoop();
}

function draw() {
  for (var i=0; i<lines.length; i++) {
    text(lines[i], 5, 20*i+20);
  }
}





