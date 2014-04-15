// http://openweathermap.org/API

var data;

function preload() {
  data = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA");
}


function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
	console.log(data);
  // for (var i=0; i<lines.length; i++) {
  // 	text(lines[i], 5, 10*i);
  // }
}
