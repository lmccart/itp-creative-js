// Combinging a third-party JS library with a sketch
// Just use the normal third-party JS library code
// Usually, you want to use the third-party code in setup
// Unless you'd like to use things in certain event functions like mousePressed
// Look at the API page for more things a library can do:
// http://buzz.jaysalvat.com/documentation/sound/

// Initializing a variable using the third-party library buzz object
var music = new buzz.sound('rhodes_loop.wav');
var bell = new buzz.sound('dingdong.wav');
var radius = 50;

function setup() {
  createCanvas(300, 300);

  music.play(); // Start playing the sound
  //music.loop(); // Loop the sound once it's playing
}

function draw() {
  if (music.isPaused()) {
    background(255, 0, 200);
  } else {
    background(0,255,200);
  }
  fill(0);
  ellipse(width/2, height/2, 2*radius, 2*radius);
  
  // Looping isn't working so adding this
  if (music.isEnded()) {
    music.load();
    music.play();
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, width/2, height/2) <= radius) {
    // Sound seems to want to be reloaded
    bell.load();
    bell.play();
  }
}

function keyPressed() {
  if (key === ' ') {
    // from pause to play or play to pause
    music.togglePlay();
  }
  //mySound.stop(); // Stop the sound
}

