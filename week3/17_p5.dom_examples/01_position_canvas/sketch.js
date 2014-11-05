
function setup() {
  var canvas = createCanvas(600, 400);
  canvas.position(50, 50);
}

function draw() {
  background(250, 120, 200);
  fill(255);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
  fill(50, 100, 200);
  ellipse(mouseX, mouseY, 25, 25);
}