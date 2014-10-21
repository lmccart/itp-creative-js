// var lines;

// function preload() {
//   lines = loadStrings("lines.txt");
// }

function setup() {
  createCanvas(600, 400);
  textSize(20);
  fill(0);
  noLoop();

  loadStrings("lines.txt", doText);
}

function draw() {
	background(255, 0, 0);

}

function doText(data) {
	for (var i=0; i<data.length; i++) {
  	text(data[i], 5, 20*i+20);
  }
}


