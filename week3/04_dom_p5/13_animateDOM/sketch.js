// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look at something that resembles a Processing sketch 
// but animations a DOM element instead

// This is our DOM element
var words;

// Variables to move it around
var x;
var y;
var xspeed = 5;
var yspeed = -2;

// Size
var fsize = 32;

var w = 280;
var h = 100;

function setup() {
  noCanvas();

  // Make a DIV with some styling
  words = createDiv("Bouncing Shaking Words");
  words.style("padding","10px");
  words.style("background-color","pink");
  words.style("text-align","center");
  words.style("vertical-align","center");
  words.size(w,h);
  words.style("line-height","100px");

  // Start it in the middle
  x = windowWidth/2;
  y = windowHeight/2;

}

function draw() {
  
  // Set position and style
  words.position(x,y);
  words.style("font-size",fsize);
  
  // Manipulate the size
  fsize = floor(fsize + random(-2,2));
  fsize = constrain(fsize,24,36);
  
  // Bouncing ball algorithm!
  x += xspeed;
  y += yspeed;

  if (x > windowWidth - w || x < 0) {
    xspeed *= -1;
  }
  if (y > windowHeight - h || y < 0) {
    yspeed *= -1;
  }
}


