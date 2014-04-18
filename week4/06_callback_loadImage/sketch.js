function setup() {
  createCanvas(1300, 600);
  noLoop();

  loadImage('large.jpg', drawImage);
  setTimeout(smaller,500);
}

function smaller() {
	loadImage('small.jpg', drawImage);

}

function draw() {
  background(255, 0, 0);
}

function drawImage(img) {
  image(img, 0, 0);
}




