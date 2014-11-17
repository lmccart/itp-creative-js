
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  fill(255);
  ellipse(width/2,height/2,100,100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};