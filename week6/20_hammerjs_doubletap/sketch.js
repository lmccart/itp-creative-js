var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };
  
  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  
  // register listener for doubletap gesture, calls function and passes event object in
  hammer.on("doubletap", changeBackground);
}


function draw() {
  background(r, g, b);
}


function changeBackground(event) {
  //console.log(event);
  r = round(random(255));
  g = round(random(255));
  b = round(random(255));
}