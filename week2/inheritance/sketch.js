// A Ball class and an inheriting SuperBall class

var myBall; // Declare Ball object as a global variable.
var mySuperBall; // Declare SuperBall object as a global variable.

function setup() {
  createCanvas(600,400);
  noStroke();
  // Initialize Car object
  myBall = new Ball(100, 100, 100); // Initialize Ball object
  mySuperBall = new SuperBall(100, 200, 0); // Initialize SuperBall object

  print(mySuperBall instanceof Ball); // true 
  print(mySuperBall instanceof SuperBall); // true

}

function draw() {
  background(39, 120, 255);
  myBall.display();
  myBall.move();

  mySuperBall.display();
  mySuperBall.move();
  mySuperBall.change();
}