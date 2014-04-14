var lines;

function preload() {
  lines = loadStrings("lines.txt");
}

function setup() {
  createCanvas(600, 400);
  //lines = loadStrings("lines.txt"); // doesn't load in time
}

function draw() {
  for (var i=0; i<lines.length; i++) {
  	text(lines[i], 5, 10*i);
  }
}





