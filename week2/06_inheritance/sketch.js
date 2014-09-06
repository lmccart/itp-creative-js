// A Ball class and an inheriting SuperBall class

var myBall; // Declare Ball object as a global variable.
var mySuperBall; // Declare SuperBall object as a global variable.

function setup() {
  createCanvas(600,400);
  noStroke();
  // Initialize Car object
  myBall = new Ball(100, 100, 100); // Initialize Ball object
  mySuperBall = new SuperBall(100, 200, 0); // Initialize SuperBall object


  // instanceof and .constructor
  print(myBall instanceof Ball); // true 
  print(myBall instanceof SuperBall); // false

  print(mySuperBall instanceof Ball); // true 
  print(mySuperBall instanceof SuperBall); // true

  print(mySuperBall.constructor == Ball); // false
  print(mySuperBall.constructor == SuperBall); // false

  print(mySuperBall.hasOwnProperty('xpos'));
  print('gray' in mySuperBall);

}

function draw() {
  background(39, 120, 255);
  myBall.display();
  myBall.move();

  mySuperBall.display();
  mySuperBall.move();
  mySuperBall.change();
}