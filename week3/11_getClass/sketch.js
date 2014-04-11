// Creating other HTML elements, adding style.

function setup() {
  
  // Create three elements
  var text0 = createHTML("red");
  var text1 = createHTML("blue");
  var text2 = createHTML("green");

  text0.position(50, 50);
  text0.style("color:red; font-size:50px");
  // Set the class for an element
  text0.class("apple");

  text1.position(50, 150);
  text1.style("color:blue; font-size:50px");
  // This one has the same class
  text1.class("apple");

  text2.position(50, 250);
  text2.style("color:green; font-size:50px");
  // This one has a different class
  text2.class("pear");

};


function mousePressed() {
  // Get an array of elements of the same class
  var apples = getClass("apple");
  // Hid them all!
  for (var i=0; i<apples.length; i++) {
    apples[i].hide();
  }
}

