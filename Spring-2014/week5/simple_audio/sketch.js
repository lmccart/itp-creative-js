// Sound
var sound;


function setup() {
  createCanvas(320,240);

  sound = createHTML('<audio id=\'doorbell\'><source src=\'dingdong.wav\'></audio>');
  sound = document.getElementById('doorbell');

  createHTML('<p>Click mouse to play sound.</p>');
}

function draw() {
  background(51);
}

function mousePressed() {
  sound.play();
}


