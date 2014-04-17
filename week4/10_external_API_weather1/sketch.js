// http://openweathermap.org/API

function setup() {
  createCanvas(1200, 400);
  noLoop();
  textAlign(CENTER);
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7", drawData);
}

function draw() {
}

function drawData(data) {

  print(data.list);
  for (var i=0; i<data.list.length; i++) {
    text("day "+i, 100+50*i, 100);
    ellipse(100+50*i, 100, data.list[i].clouds, data.list[i].clouds);
    text("day "+i, 100+50*i, 100);
  } 
}