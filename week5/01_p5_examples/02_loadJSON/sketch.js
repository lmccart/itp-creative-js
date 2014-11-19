
function setup() {
  createCanvas(600, 400);
  noLoop();
  noStroke();
  textSize(20);

  loadJSON("data.json", drawData);
}

function draw() {
  background(255, 0, 0);
  console.log(int(random(0, 2)));
}


function drawData(data) {

  background(120, 180, 200);

  // person 1 bubble
  fill(155, 30, 180, 180);
  ellipse(250, 200, data.person1.age * 5, data.person1.age * 5); // person1.age = 30
  fill(255);
  text(data.person1.name, 210, 200); // person1.name = Morgan

  // person 2 bubble
  fill(180, 180, 34, 180);
  ellipse(350, 200, data.person2.age * 5, data.person2.age * 5); // person2.age = 32
  fill(255);
  text(data.person2.name, 330, 200); // person2.name = Joss

}