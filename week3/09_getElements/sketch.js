// Creating other HTML elements, adding style.

function setup() {
  
  // Create three elements
  var text0 = createP("red");
  var text1 = createP("blue");
  var text2 = createP("green");

  text0.style("color","red");
  text0.style("font-size","50px");
  // Set the class for an element
  text0.class("apple");

  text1.style("color","blue");
  text1.style("font-size","50px");
  // This one has the same class
  text1.class("apple");

  text2.style("color","green");
  text2.style("font-size","50px");
  // This one has a different class
  text2.class("pear");

};


function mousePressed() {
  // Get an array of elements of the same class
  var apples = getElements("apple");
  // Hid them all!
  for (var i=0; i<apples.length; i++) {
    apples[i].hide();
  }
}

