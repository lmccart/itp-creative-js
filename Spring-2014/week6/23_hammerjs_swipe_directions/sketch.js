var str = "";

function setup() {

  createCanvas(windowWidth, windowHeight); 

  textAlign(CENTER);
  textSize(30);
  noStroke();

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };
  
  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  
  hammer.on("swipeup", swipeUp);
  hammer.on("swipedown", swipeDown);
  hammer.on("swipeleft", swipeLeft);
  hammer.on("swiperight", swipeRight);
}


function draw() {
  background(250, 10, 100);
  text(str, width/2, height/2);
}


function swipeUp(event) {
  str = "you swiped up!";
}

function swipeDown(event) {
  str = "you swiped down!";
}

function swipeLeft(event) {
  str = "you swiped left!";
}

function swipeRight(event) {
  str = "you swiped right!";
}