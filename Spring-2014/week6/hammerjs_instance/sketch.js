
var s = function(sketch) {
	var diameter;
	var square;

  sketch.setup = function() {
    var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight); 
    console.log(sketch.windowWidth);
/*
  
    square = sketch.createHTML("");
    square.id("button");
  
    diameter = sketch.windowWidth*0.05;
    sketch.noStroke();
    sketch.noLoop();

    // clicking or touching canvas draws ellipse
    // cnv.elt gives us the actual DOM element
    var canvasHammer = new Hammer(cnv.elt);
    canvasHammer.on("tap", drawEllipse);
   
  
    
    // you can also use document.getElementById to get a DOM element
    var button = document.getElementById("button");
    
    // set options to customize gestures
    // https://github.com/EightMedia/hammer.js/wiki/Getting-Started#gesture-options
    var options = {
      holdTimeout: 500
    };
    var buttonHammer = new Hammer(button, options);
    
    
    // clicking or touching div changes background color
    buttonHammer.on("tap", changeBackground);
    
    // holding on div changes fill color
    buttonHammer.on("hold", changeFill);
*/
  
  };
  

  sketch.draw = function() {
    sketch.background(150);
  };
/*

    // draw an ellipse using gesture position data
  function drawEllipse(event) {
    //console.log(event);
    var x = event.gesture.center.pageX;
    var y = event.gesture.center.pageY;
    sketch.ellipse(x, y, diameter, diameter);
  }
  
  // set background to random rgb color
  function changeBackground(event) {
    console.log('changeBackground');
    sketch.background(sketch.random(255), sketch.random(255), sketch.random(255));
  }
  
  
  // pick a new random rgb color and set background and square color
  function changeFill(event) {
    console.log('changeFill');
    var r = sketch.round(sketch.random(255));
    var g = sketch.round(sketch.random(255));
    var b = sketch.round(sketch.random(255));
    
    var newStyle = "background:rgb("+r+","+g+","+b+");";
    square.style(newStyle);
    sketch.fill(r, g, b);
  }
*/
  
};


var myp5 = new p5(s);



