// This example does not work at the moment
// See: https://github.com/lmccart/p5.js/issues/186

var a;
var b;

function setup() {
  createCanvas(1300, 600);
  //noLoop();
  a = new ImageThing(200,200,'large.jpg');
  //b = new ImageThing(100,100,'small.jpg');
}

function draw() {
  background(255, 0, 0);
  a.update();
  a.display();

  //b.update();
  //b.draw();
}

function ImageThing(x,y,s) {
  this.x = x;
  this.y = y;
  this.img = null;
  loadImage(s,this.loaded);
  println(this);
}

ImageThing.prototype.update = function() {
  this.x += random(-2,2);
  this.y += random(-2,2);
};

ImageThing.prototype.display = function() {
  if (!this.img) {
    fill(0);
    text("LOADING",this.x,this.y);
  } else {
    image(this.img,this.x,this.y);
  }
};

ImageThing.prototype.loaded = function(incoming) {
  println("Context is the window object! " + this);
  image(incoming,0,0);
};