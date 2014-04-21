// http://popcornjs.org/
// http://popcornjs.org/popcorn-docs/

var mySketch = function(sketch) {

  var pop;
  var radius = 10;
  var y = 270;

  sketch.setup = function() {
    sketch.createCanvas(300, 300);
    sketch.noStroke();
    sketch.fill(0);
    sketch.noLoop();
    sketch.textAlign(sketch.CENTER);
    sketch.textSize(25);

    pop = Popcorn("#vid");

    // http://popcornjs.org/popcorn-docs/media-methods/#on
    // http://popcornjs.org/popcorn-docs/events/
    pop.on("ended", vidEnd); 
    //pop.on("ended", function(){ sketch.print('end'); });
  };

  sketch.draw = function() {
    sketch.background(255, 0, 200);
    sketch.ellipse(sketch.width/2, y, 2*radius, 2*radius);
  };

  sketch.mousePressed = function() {
    if (sketch.dist(sketch.mouseX, sketch.mouseY, sketch.width/2, y) <= radius) {
      pop.play(); // http://popcornjs.org/popcorn-docs/media-methods/#play
    }
  };

  sketch.mouseReleased = function() {
    pop.pause(); // http://popcornjs.org/popcorn-docs/media-methods/#pause
  };

  function vidEnd() {
    sketch.background(0, 255, 0);
    sketch.text("video done!", sketch.width/2, y);
  }
};


var myp5 = new p5(mySketch, "canvas");
