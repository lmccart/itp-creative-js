// Scramble what the user enters into a text field

// Some HTML
var words;

var x;
var y;
var xspeed = 5;
var yspeed = -4;

var fsize = 48;

function setup() {
  // Make the HTML
  words = createHTML("Bouncing Shaking Words");
  x = displayWidth/2;
  y = displayHeight/2;
}

function draw() {
  
  // Set position and style
  words.position(x,y);
  words.style('font-size: '+fsize+'pt;');
  
  // Manipulate the size
  fsize = floor(fsize + random(-2,2));
  fsize = constrain(fsize,12,72);
  
  // Bouncing ball algorithm!
  x += xspeed;
  y += yspeed;

  if (x > displayWidth || x < 0) {
    xspeed *= -1;
  }
  if (y > displayHeight || y < 0) {
    yspeed *= -1;
  }


}




