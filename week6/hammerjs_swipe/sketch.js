var xVel;
var x, y;
var diameter;

function setup() {
console.log("HI")
  createCanvas(windowWidth, windowHeight); 
  noStroke(); 
  x = width/2;
  y = height/2;
  diameter = windowWidth*0.1;
  xVel = 0;
  yVel = 0;

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };
  
  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  
  hammer.on("swipe", swipe);
}


function draw() {
  background(150);
  
  ellipse(x, y, diameter, diameter);
  
  // move
  x += xVel;
  y += yVel;
  
  // wrap
  if (x >= width + diameter*0.5) {
    x = -diameter*0.5;
  } else if (x <= -diameter*0.5) {
  x = width + diameter*0.5;
  }
  
  if (y >= height + diameter*0.5) {
    y = -diameter*0.5;
  }  else if (y <= -diameter*0.5) {
  y = height + diameter*0.5;
  }
  
  
  // deccelerate
  xVel *= 0.9;
  yVel *= 0.9;
}


function swipe(event) {
  var xDir = event.gesture.deltaX / abs(event.gesture.deltaX);
  xVel += xDir*10*event.gesture.velocityX;
  
  
  var yDir = event.gesture.deltaY / abs(event.gesture.deltaY);
  yVel += yDir*10*event.gesture.velocityY;
}
