// Using HTML specific mouse listeners, mouseOver and mouseOut.


// We define the variables outside of setup so we can access them from anywhere in the sketch.
var img;
var canvas;


function setup() {

  createP("The image appears only when the mouse is over the canvas element.")

  // Make the canvas
  canvas = createCanvas(400, 400);
  // Make an HTML image
  img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

  // Here we call methods of HTML Image element to set the position and size.
  img.position(410, 40);
  img.size(200, AUTO);
   
  // Set the position of the canvas
  canvas.position(0, 40);
  // Attach listeners for mouse events related to canvas
  canvas.mouseOver(uniHide);
  canvas.mouseOut(uniShow);
};


// Drawing on the canvas
function draw() {
  background(220, 180, 200);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (var i=0; i<width; i+=15) {
    line(i, 0, i, height);
  }
};

// Create functions for hiding and showing uni image. 
// These will be hooked into mouse events related to canvas above.
function uniHide() {
  img.hide();
}

function uniShow() {
  img.show();
}

