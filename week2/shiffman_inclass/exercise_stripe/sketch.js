var x = 0;
var w = 20;
var speed = 2;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(50);
  
  if (mouseX > x && mouseX < x + w) {
  	fill(255);
  } else {
    fill(255,100);
  }
  rect(x,0,w,height);

  x = x + speed;
  if (x > width) {
  	x = 0;
  }
}



