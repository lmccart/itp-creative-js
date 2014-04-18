// http://openweathermap.org/API

function setup() {
  createCanvas(600, 400);
  background(51);


  var nyc = createHTML("<a href=\'#\'>New York</a>");
  nyc.city = "New%20York";
  nyc.mousePressed(getJSON.bind(nyc));
  nyc.position(10,420);

  var lond = createHTML("<a href=\'#\'>London</a>");
  lond.city = "London";
  lond.mousePressed(getJSON.bind(lond));
  lond.position(100,420);
}

function draw() {
}

function getJSON() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.city+"&mode=json&units=imperial&cnt=14", drawData);
}

function clearIt() {
  var elements = document.getElementsByClassName("temp"); //getClass("temp");
  //buggy
  //var elements = getClass("temp");
  for (var i = elements.length-1; i >= 0; i--) {
    document.body.removeChild(elements[i]);
  }
}

function drawData(data) {
  clearIt();

  background(51);


  var city = createHTML(data.city.name + ' 14 day forecast');
  city.style("color: #FFFFFF; font-size: 16pt");
  city.position(10,20);
  city.class("temp");

  var w = width/data.list.length;
  //print(data);
  stroke(255);
  beginShape();
  for (var i=0; i<data.list.length; i++) {
    var temp = data.list[i].temp.day;
    var y = map(temp,0,100,height,0);
    var x = w/2+i*w;
    vertex(x,y);
    var day = createHTML(floor(temp));
    day.style("color: #FFFFFF");
    day.position(x,y);
    day.class("temp");

  }
  endShape();
}
