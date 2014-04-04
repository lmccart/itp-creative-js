
var bubble;

var bubble2;

function setup() {
  createCanvas(600,400);


  bubble = new Bubble();
  bubble2 = new Bubble();
  //bubble2 = Object.create(bubble);
}

Bubble.prototype.move = function() {
  this.y -= 1;
}

function Bubble() {
  this.x = random(width);
  this.y = random(height);
}

function draw() {
  background(50);

  fill(125);
  stroke(255);
  ellipse(bubble.x,bubble.y,48,48);
  ellipse(bubble2.x,bubble2.y,48,48);

  bubble.move();
  bubble2.move();
  

}



