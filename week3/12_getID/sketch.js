// Creating other HTML elements, adding style.


function setup() {

  var text0 = createHTML("apple");
  var text1 = createHTML("banana");
  var text2 = createHTML("pear");
  
  // Now each elements with have a unique "ID"
  text0.position(50, 50);
  text0.style("color:red; font-size:50px");
  text0.id("apple");

  text1.position(50, 150);
  text1.style("color:blue; font-size:50px");
  text1.id("banana");

  text2.position(50, 250);
  text2.style("color:green; font-size:50px");
  text2.id("pear");

};


function keyPressed() {
  var found;
  // Depending on the key that is pressed
  // We'll find an element and hide it
  if (key == "A") {
    found = getId("apple");
  } else if (key == "B") {
    found = getId("banana");
  } else if (key == "P") {
    found = getId("pear");
  }
  // Did we find one?
  if (found) {
    found.hide();
  }
}

