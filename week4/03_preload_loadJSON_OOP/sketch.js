var json;

var people = [];

function preload() {
  // Load a  JSON array
  json = loadJSON("data.json");
}

function setup() {
  createCanvas(600, 400);
  noLoop();
  noStroke();
  textSize(20);

  // Go through the JSON array and make some objects
  for (var i = 0; i < json.length; i++) {
    people[i] = new Person(json[i]);
  }
}

function draw() {
  background(120, 180, 200);
  for (var i = 0; i < people.length; i++) {
    people[i].display();
  }
}

// This is awkward but I'm copying all of the JSON
// properties into an object of this type
function Person(data) {
  this.x = random(width);
  this.y = random(height);
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      this[prop] = data[prop];
    }
  }
}

// and now adding a method
Person.prototype.display = function() {
  fill(155, 30, 180, 180);
  ellipse(this.x, this.y, this.age * 5, this.age * 5);
  fill(255);
  text(this.name, this.x, this.y);
};
