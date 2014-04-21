

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

    var videoInput = document.getElementById('inputVideo');
    var canvasInput = document.getElementById('inputCanvas');
    var cnv = document.getElementById('canvas');

    var htracker = new headtrackr.Tracker({ui: false});
    htracker.init(videoInput, canvasInput);
    htracker.start();

    document.addEventListener('facetrackingEvent', 
      function (event) {
        drawFace(event.x, event.y, event.height, event.width);
      }
    );
  };

  sketch.draw = function() {
    sketch.background(255, 0, 200);
  };

  function drawFace(x, y, w, h) {
    sketch.background(255, 0, 200);
    sketch.ellipse(x, y, w, h);
  }
};


var myp5 = new p5(mySketch, "p5canvas");
