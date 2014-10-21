// http://popcornjs.org/
// http://popcornjs.org/popcorn-docs/

var pop;
var radius = 50;

function setup() {
  createCanvas(320, 240);
  noStroke();
  fill(0);

  // Create a popcorn instance by calling Popcorn("#id-of-my-video")
  pop = Popcorn("#vid");
  pop.loop(true);  // Lopp not working, see: http://stackoverflow.com/questions/8088364/html5-video-will-not-loop

  createHTML("Hold mouse down on circle to play video.");

};

function draw() {
  background(255, 0, 200);
  ellipse(width/2, height/2, 2*radius, 2*radius);
};

function mousePressed() {
  if (dist(mouseX, mouseY, width/2, height/2) <= radius) {
    pop.play();
  }
};

function mouseReleased() {
  pop.pause();
};