// Creating other HTML elements, adding style.


function setup() {

  var text0 = createHTML("red");
  var text1 = createHTML("blue");
  var text2 = createHTML("green");

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
  if (key == "A") {
    found = getId("apple");
  } else if (key == "B") {
    found = getId("banana");
  } else if (key == "P") {
    found = getId("pear");
  }
  if (found) {
    found.hide();
  }
}

