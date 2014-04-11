// Creating HTML images

// We define the variables outside of setup so we can access them from anywhere in the sketch.
var img;
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  img = createHTMLImage("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

  // Here we call methods of each element to set the position.
  // Use the element inspector to look at the HTML generated from this code when you load the sketch in your browser.
  img.position(190, 50);
  // This sets the width to 200 and the height according to the image's native aspect ratio
  img.size(200, AUTO);

  // What happens if you create the canvas after the image?

  canvas.position(300, 50);
}


function draw() {

  // What happens if you have no background!
  background(220, 180, 200);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (var i=0; i<width; i+=15) {
    line(i, 0, i, height);
  }

}