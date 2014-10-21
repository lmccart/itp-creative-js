// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Ported by Lauren McCarthy

// Example 8-1: A Car class and a Car object

var myCar; // Declare car object as a globle variable.


function setup() {
  createCanvas(600,400);
  // Initialize Car object
  myCar = new Car(); // Initialize car object in setup() by calling constructor.
}

function draw() {
  background(39, 120, 255);
  myCar.display();
  myCar.move();



}

function Car() {
  this.c = 175;
  this.xpos = width/2;
  this.ypos = height/2;
  this.xspeed = 1;
}

Car.prototype.display = function() {
  rectMode(CENTER);
  stroke(0);
  fill(this.c);
  rect(this.xpos, this.ypos, 100, 50);
};

Car.prototype.move = function() {
  this.xpos += this.xspeed;
  if (this.xpos > width + 50) {
    this.xpos = -50;
  }
};

Car.prototype.setXSpeed = function(newSpeed) {
  this.xspeed = newSpeed;
  print(this.xspeed);
};


