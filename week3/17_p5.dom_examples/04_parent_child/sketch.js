function setup() {

  // Now let's try putting some more HTML in.
  var text = createP("Here is some text and <a href='http://i.imgur.com/WXaUlrK.gif'>this is an HTML link</a>!  ");
  var link = createA("http://i.imgur.com/WXaUlrK.gif","We can also create a link this way.")
  var canvas = createCanvas(600, 400);

  // We are letting the elements float (no absolute positioning)
  // Also ids and classes
  text.id("apple");
  link.id("pear");
  canvas.class("lemon");
   
  // We can put the link element inside the paragraph one with child()
  text.child("pear");
}


function draw() {
  background(250, 120, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}
