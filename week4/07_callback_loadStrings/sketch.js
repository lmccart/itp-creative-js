
function setup() {
  createCanvas(600, 400);
  textSize(20);
  fill(0);
  noLoop();
  loadStrings("lines.txt", drawStrings)
}

function draw() {
}

function drawStrings(lines) {
  for (var i=0; i<lines.length; i++) {
    text(lines[i], 5, 20*i+20);
  }
}





