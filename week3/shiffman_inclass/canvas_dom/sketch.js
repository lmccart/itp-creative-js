
// Two canvases!
var canvas1;
var canvas2;

// Location of one canvas
var x = 0;
var speed = 5;

// Location of circle on canvas
var ballx = 0;

function setup() {  
  // Make both canvases
  canvas1 = createCanvas(300,200);
  canvas2 = createCanvas(300,200);
}

function draw() { 
  // Canvas one is on one side
  canvas1.position(x,100);
  // Canvas two is on the other side
  canvas2.position(displayWidth-x-300,100);

  // logic
  x = x + speed;
  ballx = ballx + speed;

  if (ballx > width || ballx < 0) {
    speed *= -1;
  }

  // Now deal with drawing on canvas 1
  context(canvas1);
  background(0);  
  fill(255);
  ellipse(ballx,100,40,40);

  // No wdeal with drawing on canvas 2
  context(canvas2);
  background(255,0,0);
}

function keyPressed() {
	//canvas.hide();
}
