
var canvas1;
var canvas2;

var x = 0;

var ballx = 0;

function setup() {  
  canvas1 = createCanvas(600,400);
  canvas2 = createCanvas(600,400);
  background(0);
}

function draw() { 
  canvas1.position(x,100);
  canvas2.position(displayWidth-x,100);

  context(canvas1);
  background(0);
  
  fill(255);
  ellipse(ballx,200,40,40);

  x++;
  ballx++;

  context(canvas2);
  //background(255,0,0);

}

function keyPressed() {
	//canvas.hide();
}
