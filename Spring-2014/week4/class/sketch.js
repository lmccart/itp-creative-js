
function setup() {
}

function draw() {
  doThisThenThat(drawEllipse, drawRect);
}

function drawEllipse() {
  ellipse(100, 100, 50, 50);
}

function drawRect() {
  rect(300, 300, 50, 50);
}