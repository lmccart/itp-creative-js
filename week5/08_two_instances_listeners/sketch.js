var s0 = function( sketch ) {

  var x = 0;
  var y = 0; 

  sketch.setup = function() {
    var cnv = sketch.createCanvas(400, 400);
    cnv.mousePressed(moveY);
    sketch.rectMode(sketch.CENTER);
  };

  sketch.draw = function() {
    sketch.background(100,0,255);
    sketch.fill(0);
    sketch.rect(x, y, 50, 50);
  };

  sketch.mousePressed = function() {
    x += 10;
    sketch.print("sketch0 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  };

  sketch.mouseMoved = function() {
    //sketch.print("sketch0 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  };

  function moveY() {
    y += 10;
    sketch.print("sketch0 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  }
};

var myp5_0 = new p5(s0, 'canvas0');





var s1 = function( sketch ) {

  var y = 0; 

  sketch.setup = function() {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = function() {
    sketch.background(255, 0, 100);
    sketch.fill(0);
    sketch.rect(sketch.width/2, y, 50, 50);
  };

  sketch.mousePressed = function() {
    y += 10;
    console.log("sketch1 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  };

  sketch.mouseMoved = function() {
    //console.log("sketch1 x:"+sketch.mouseX+" y:"+sketch.mouseY);
  };

  sketch.mouseReleased = function() {
    console.log("mouseReleased 1");
  };

  sketch.keyPressed = function() {
    console.log("keyPressed 1");
  };

  sketch.mouseDragged = function() {
    console.log("mouseDragged 1");
  };
};

var myp5_1 = new p5(s1, 'canvas1');

