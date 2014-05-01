var s = 1.0;
var r = 0;

function setup() {
console.log("HI");
  createCanvas(windowWidth, windowHeight); 
  noStroke(); 
  rectMode(CENTER);

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };
  
  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  
  hammer.on("pinch", scaleRect);
  hammer.on("rotate", rotateRect);
}


function draw() {
  background(150);
  
  fill(0);
  ellipse(width/2, height/2, windowWidth*0.5, windowWidth*0.5);
  
  fill(255);
  translate(width/2, height/2);
  rotate(r);
  scale(s);
  rect(0, 0, windowWidth*0.1, windowWidth*0.1);
}


function rotateRect(event) {
  r = radians(event.gesture.rotation);
}


function scaleRect(event) {
  s = event.gesture.scale;
}