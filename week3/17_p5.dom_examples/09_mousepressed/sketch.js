// Using HTML element specific mouse listeners, mousePressed.

// We define the variables outside of setup so we can access them from anywhere in the sketch.
var img;
var canvas;

function setup() {

  createP("When you click the image it disappears.  Press any key and it reappears.")

  canvas = createCanvas(400, 400);
  img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

  img.position(190, 50);
  img.size(200, AUTO);
  // Attach listeners for mouse events related to img.
  img.mousePressed(uniHide);

  canvas.position(300, 50);
}


function draw() {

  noStroke();
  background(220, 180, 200);
  fill(180, 200, 40);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (var i=0; i<width; i+=15) {
    line(i, 0, i, height);
  }

}

// Create functions for hiding and showing uni image. These will be hooked into mouse events related to canvas above.
function uniHide() {
  img.hide();
}

function uniShow() {
  img.show();
}

// Define keyPressed behavior. This one doesn't need to be hooked in, it's automatically called on key press.
function keyPressed() {
  uniShow();
}