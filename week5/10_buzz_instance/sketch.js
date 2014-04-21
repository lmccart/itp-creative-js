var mySketch = function(sketch) {

  var mySound = new buzz.sound('rhodes_loop.wav');
  var radius = 50;

  sketch.setup = function() {
    sketch.createCanvas(300, 300);
    sketch.noStroke();
    sketch.fill(0);
  };

  sketch.draw = function() {
    sketch.background(255, 0, 200);
    sketch.ellipse(sketch.width/2, sketch.height/2, 2*radius, 2*radius);
  };

  sketch.mousePressed = function() {
    if (sketch.dist(sketch.mouseX, sketch.mouseY, sketch.width/2, sketch.height/2) <= radius) {
      mySound.play();
      mySound.loop();
    }
  };

  sketch.mouseReleased = function() {
    mySound.stop();
  };
};


var myp5 = new p5(mySketch);
