var lines;

var htmls = [];

function preload() {
  lines = loadStrings("lines.txt");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i=0; i<lines.length; i++) {
    htmls[i] = createHTML(lines[i]);
    htmls[i].position(5,20*i+20);
  }
  noLoop();
}

function draw() {
  for (var i=0; i<lines.length; i++) {
    stroke(0);
    fill(0,20);
    rect(5, 20*i+20,lines[i].length*10,20);
  }
}