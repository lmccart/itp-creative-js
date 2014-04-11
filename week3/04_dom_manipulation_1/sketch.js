// Creating other HTML elements.


function setup() {


  // Now let's try putting some more HTML in.
  var text = createHTML("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!");
  var canvas = createCanvas(600, 400);

  // Here we call methods of each element to set the position and id, try changing these values.
  // Use the inspector to look at the HTML generated from this code when you load the sketch in your browser.
  text.position(50, 50);
  text.id("apple");

  canvas.position(50, 100);
  canvas.class("lemon");

}


function draw() {

  background(250, 120, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);

}
