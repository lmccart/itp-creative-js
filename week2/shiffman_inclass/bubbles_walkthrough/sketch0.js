var x,y;

function setup() {
  createCanvas(600,400);
  x = width/2;
  y = height;
}

function draw() {
  background(50);

  fill(125);
  stroke(255);
  ellipse(x,y,48,48);

  y = y - 1;
  x = x + random(-1,1);
}



