// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look at a simple sketch that adds some buttons
// and sliders!

var balls = [];       // We start with an empty array
var gravity = 0.1;

// All of the DOM elements we need
var counter;
var button;
var slider;
var sliderVal;

function setup() {
  createCanvas(640,360);
  
  // Dom elements
  counter = createP("");
  
  // A button
  button = createButton("Add a new ball.");
  // Attach the button to a function!
  button.mousePressed(newBall);
  button.position(20,340);

  // A slider
  // Min and max values and where to start
  slider = createSlider(10,100,50);
  // A dom element to show us the value
  sliderVal = createDiv("");

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

  // Updating the DOM elements that show us info:
  counter.html("Total objects: " + balls.length);
  sliderVal.html("Size: " + slider.value());
}

function newBall() {
  // A new ball object
  var b = new Ball(random(width),random(height),slider.value()); // Make a new object at the mouse location.
  // Here, the function push() adds an element to the end of the array. 
  balls.push(b);
}
