var s = function( sketch ) {

  var gray = 0; 

  var x = 0;

  sketch.setup = function() {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = function() {
    sketch.background(gray);
    sketch.rect(x, sketch.height/2, 50, 50);

    x = x + 5;
    if (x > sketch.width) {
      x = 0;
    }
  }

  sketch.mousePressed = function() {
    gray += 10;
  }

};

var myp5_0 = new p5(s, 'canvas0');


var myp5_1 = new p5(s, 'canvas1');