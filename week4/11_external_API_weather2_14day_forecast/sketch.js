// ITP Creative JS
// Daniel Shiffman
// Graph 14 day forecast from:
// http://openweathermap.org/API


function setup() {
  createCanvas(600, 400);
  background(51);

  // A link to trigger NYC data
  var nyc = createHTML("<a href=\'#\'>New York</a>");
  nyc.mousePressed(newyork);
  nyc.position(10,420);

  // A link to trigger London data
  var lond = createHTML("<a href=\'#\'>London</a>");
  lond.mousePressed(london);
  lond.position(100,420);

}

function draw() {
}

// Load the NY data (see: sketch_bind for strategy to condense these into one function)
function newyork() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20York&mode=json&units=imperial&cnt=14", drawData);
}

function london() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=imperial&cnt=14", drawData);
}

function clearIt() {
  // Grab all the elements that are of class temp
  var elements = document.getElementsByClassName("temp");
  // buggy and not working but this would be the "p5" way
  // var elements = getClass("temp");
  // Remove all the elements
  for (var i = elements.length-1; i >= 0; i--) {
    document.body.removeChild(elements[i]);
  }
}

function drawData(data) {
  clearIt();
  
  background(51);
  

  // DOM element for city
  var city = createHTML(data.city.name + ' 14 day forecast');
  city.style("color: #FFFFFF; font-size: 16pt");
  city.position(10,20);
  city.class("temp");

  // Draw a line graph
  var w = width/data.list.length;
  stroke(255);
  beginShape();
	for (var i=0; i<data.list.length; i++) {
    // This is how we get the data from JSON
    var temp = data.list[i].temp.day;
    // Arbitrary mapping of data
    var y = map(temp,0,100,height,0);
    var x = w/2+i*w;
    vertex(x,y);
    // A DOM element to display actual temperature
    var day = createHTML(floor(temp));
    day.style("color: #FFFFFF");
    day.position(x,y);
    day.class("temp");

	}
  endShape();
}
