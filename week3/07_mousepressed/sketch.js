// Using HTML element specific mouse listeners, mousePressed.

// We define the variables outside of setup so we can access them from anywhere in the sketch.
var link;
var bg;

function setup() {
  createCanvas(400, 400);
  bg = color(51);

  link = createA("#","Click me");
  // Attach listeners for mouse events related to img.
  link.mousePressed(changeBG);

}

function draw() {
  background(bg);
}

function changeBG() {
  bg = color(random(255));
}
