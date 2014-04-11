// Creating other HTML elements, adding style.


function setup() {

  var text = createHTML("This is an HTML string with style!");
  var canvas = createCanvas(600, 400);

  text.position(50, 50);
  text.id("apple");
  // Here we are no longer passing in style information directly
  // but rather via the id #apple are pulling it from style.css


  canvas.position(150, 150);
  canvas.class("lemon");
  
};


function draw() {

  background(250, 120, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);

};
