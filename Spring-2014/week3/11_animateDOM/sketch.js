// Scramble what the user enters into a text field

// Some HTML
var words;

var x;
var y;
var xspeed = 5;
var yspeed = -2;

var fsize = 48;

function setup() {
  noCanvas();
  // Make the HTML
  words = createP("Bouncing Shaking Words");
  x = windowWidth/2;
  y = windowHeight/2;

}

function draw() {
  
  // Set position and style
  words.position(x,y);
  words.style("font-size",fsize);
  
  // Manipulate the size
  fsize = floor(fsize + random(-2,2));
  fsize = constrain(fsize,12,72);
  
  // Bouncing ball algorithm!
  x += xspeed;
  y += yspeed;

  if (x > windowWidth || x < 0) {
    xspeed *= -1;
  }
  if (y > windowHeight || y < 0) {
    yspeed *= -1;
  }


}



// Temporary until https://github.com/lmccart/p5.js/pull/354
function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}


