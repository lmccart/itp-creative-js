// Creating other HTML elements, adding style.


function setup() {

  var text0 = createHTML("red");
  var text1 = createHTML("blue");
  var text2 = createHTML("green");

  text0.position(50, 50);
  text0.style("color:red; font-size:50px");
  text0.class("apple");

  text1.position(50, 150);
  text1.style("color:blue; font-size:50px");
  text1.class("apple");

  text2.position(50, 250);
  text2.style("color:green; font-size:50px");
  text2.class("pear");

};


function mousePressed() {
  var apples = getClass("apple");
  for (var i=0; i<apples.length; i++) {
    apples[i].hide();
  }
}

