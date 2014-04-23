// http://popcornjs.org/
// http://popcornjs.org/popcorn-docs/

var mySketch = function(sketch) {

  var pop;
  var radius = 50;

  sketch.setup = function() {
    sketch.createCanvas(300, 300);
    sketch.noStroke();
    sketch.fill(0);

    // Create a popcorn instance by calling Popcorn("#id-of-my-video")
    pop = Popcorn("#vid");
    pop.loop(true);  // Lopp not working, see: http://stackoverflow.com/questions/8088364/html5-video-will-not-loop
  };

  sketch.draw = function() {
    sketch.background(255, 0, 200);
    sketch.ellipse(sketch.width/2, sketch.height/2, 2*radius, 2*radius);
  };

  sketch.mousePressed = function() {
    if (sketch.dist(sketch.mouseX, sketch.mouseY, sketch.width/2, sketch.height/2) <= radius) {
      pop.play();
    }
  };

  sketch.mouseReleased = function() {
    pop.pause();
  };
};


var myp5 = new p5(mySketch, "canvas");
