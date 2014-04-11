
// Three elements
var hello;
var porp;
var canvas;

// Variables for a ball
var x = 0;
var y = 100;

function setup() {  
  // Create the elements
  porp = createHTMLImage("http://static.guim.co.uk/sys-images/Environment/Pix/columnists/2012/9/4/1346772666047/Finless-porpoise-in-the-a-007.jpg");
  canvas = createCanvas(300,200);

  // Make the text last b/c we want to click on it
  hello = createHTML("<a href=\"#\">Hello</a>");
  hello.position(100,100);

  //hello.id("apple"); // use style-sheet
  hello.style("font-size:48pt;"); // inline style
  porp.size(300,200);
  // Assign function for mouse presses
  hello.mousePressed(resizePorpoise);
}

function resizePorpoise() {
  // We could draw to canvas here if we want
  //background(255,0,0);
  // Resize image
  porp.size(300+ random(-10,10),200+random(-10,10));
}

function draw() {
  // The canvas will be transparent
  clear();
    
  // Move the circle
  fill(0,0,255);
  ellipse(x,y,20,20);
  x++;
}

function mousePressed() {
  // Switch style ids
  // hello.id("pear");
}
