function setup() {
  createCanvas(600, 400);
  fill(0);
  noLoop();

  loadStrings("lines.txt", doText);
}

function draw() {
  background(0, 150, 250);

}

function doText(data) {
  for (var i=0; i<data.length; i++) {
    text(data[i], 5, 20*i+20);
  }
}


