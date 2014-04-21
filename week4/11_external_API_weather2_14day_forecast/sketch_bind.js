// ITP Creative JS
// Daniel Shiffman
// Graph 14 day forecast from:
// http://openweathermap.org/API

function setup() {
  createCanvas(600, 400);
  background(51);

  // A link to trigger NYC data
  var nyc = createHTML("<a href=\'#\'>New York</a>");
  // Add a property we can get later
  nyc.city = "New%20York";
  // Bind the context of the function to the NYC object
  nyc.mousePressed(getJSON.bind(nyc));
  nyc.position(10,420);

  // A link to trigger London data
  var lond = createHTML("<a href=\'#\'>London</a>");
  // Add a property we can get later
  lond.city = "London";
  // Bind the context of the function to the NYC object
  lond.mousePressed(getJSON.bind(lond));
  lond.position(100,420);
}

function draw() {
}

// This function grabs the city from whatever context it was bound to
function getJSON() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.city+"&mode=json&units=imperial&cnt=14", drawData);
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
  // Clear all the DOM elements
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
