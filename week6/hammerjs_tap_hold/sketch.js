var diameter;
var square;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight); 
  
  square = createHTML("");
  square.id("button");
  
  diameter = windowWidth*0.05;
  noStroke();
  noLoop();

  // clicking or touching canvas draws ellipse
  // cnv.elt gives us the actual DOM element
  var canvasHammer = new Hammer(cnv.elt);
  canvasHammer.on("tap", drawEllipse);
 

  
  // you can also use document.getElementById to get a DOM element
  var button = document.getElementById("button");
  
  // set options to customize gestures
  // https://github.com/EightMedia/hammer.js/wiki/Getting-Started#gesture-options
  var options = {
    holdTimeout: 3000
  };
  var buttonHammer = new Hammer(button, options);
  
  
  // clicking or touching div changes background color
  buttonHammer.on("tap", changeBackground);
  
  // holding on div changes fill color
  buttonHammer.on("hold", changeFill);

}

function draw() {
  background(150);
}

// draw an ellipse using gesture position data
function drawEllipse(event) {
  //console.log(event);
  var x = event.gesture.center.pageX;
  var y = event.gesture.center.pageY;
  ellipse(x, y, diameter, diameter);
}

// set background to random rgb color
function changeBackground(event) {
  print('changeBackground');
  background(random(255), random(255), random(255));
}


// pick a new random rgb color and set background and square color
function changeFill(event) {
  print('changeFill');
  var r = round(random(255));
  var g = round(random(255));
  var b = round(random(255));
  
  var newStyle = "background:rgb("+r+","+g+","+b+");";
  square.style(newStyle);
  fill(r, g, b);
}




