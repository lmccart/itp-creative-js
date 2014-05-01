
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight); 
  noStroke();
  noLoop();

  // clicking or touching canvas draws ellipse
  // cnv.elt gives us the actual DOM element
  Hammer(cnv.elt).on("tap", drawEllipse);

  // clicking or touching div changes background color
  // you can also use document.getElementById to get a DOM element
  var button = document.getElementById("button");
  Hammer(button).on("tap", changeBackground);

}

function draw() {
  background(150);
}

function drawEllipse(event) {
	//console.log(event);
  var x = event.gesture.center.pageX;
  var y = event.gesture.center.pageY;
  ellipse(x, y, 100, 100);
}

function changeBackground(event) {
	background(random(255), random(255), random(255));
}