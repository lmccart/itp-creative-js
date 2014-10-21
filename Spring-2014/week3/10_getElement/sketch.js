// Creating other HTML elements, adding style.


function setup() {

  var text0 = createP("apple");
  var text1 = createP("banana");
  var text2 = createP("pear");
  
  // Now each elements with have a unique "ID"
  text0.position(50, 50);
  text0.style("color","red");
  text0.style("font-size","50px");
  text0.id("apple");

  text1.position(50, 150);
  text1.style("color","blue");
  text1.style("font-size","50px");
  text1.id("banana");

  text2.position(50, 250);
  text2.style("color","green");
  text2.style("font-size","50px");
  text2.id("pear");

};


function keyPressed() {
  var found;
  // Depending on the key that is pressed
  // We'll find an element and hide it
  if (key == "A") {
    found = getElement("apple");
  } else if (key == "B") {
    found = getElement("banana");
  } else if (key == "P") {
    found = getElement("pear");
  }
  // Did we find one?
  if (found) {
    found.hide();
  }
}

