// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-11 ported to p5.js
// Resizing an array is JS is as easy as "push()"

var balls = []; // We start with an empty array
var gravity = 0.1;

var counter;
var button;
var slider;
var sliderVal;

function setup() {
  createCanvas(640,360);
  
  // I'm going to draw some text on top of the canvas!
  counter = createP("");
  counter.style("font-size","16pt;");
  
  // A button
  button = createButton("Add a new object.");
  // Attach the button to a function!
  button.mousePressed(newBall);

  // A range
  slider = createSlider(10,100,50);
  sliderVal = createP("");

  // Initialize ball index 0
  balls.push(new Ball(50,0,24));


}

function draw() {
  background(51);
  
  // Update and display all balls
  for (var i = 0; i < balls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    balls[i].gravity();
    balls[i].move();
    balls[i].display();
  }

  // Updating the text!
  counter.html("Total objects: " + balls.length);


  fill(255);
  sliderVal.html("Size: " + slider.value());


}

function newBall() {
  // A new ball object
  var b = new Ball(random(width),random(height),slider.value()); // Make a new object at the mouse location.
  // Here, the function push() adds an element to the end of the array. 
  balls.push(b);
}
