var x = 300;
var y = 300;
var speed = 0;
var input;
var button;
var url = "http://api.openweathermap.org/data/2.5/weather?q=";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  input = createInput();
  input.position(50, 50);

  button = createButton("submit");
  button.position(50, 80);
  button.mousePressed(updateData);
}

function draw() {
  background(200);
  ellipse(x, y, 50, 50);
  x += speed;
}

function handleData(weatherData) {
  speed = weatherData.wind.speed;
}

function updateData() {
  var city = input.value(); // text in the box
  console.log(city);
  //var city = "NewYork,USA";
  loadJSON(url+city, handleData);
  x = 300;
}

