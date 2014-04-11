// Using find.

var elt0;
var elt1;
var elt2;

function setup() {

  elt0 = createHTML("element 0");
  elt1 = createHTML("element 1");
  elt2 = createHTML("element 2");

  // Let's give the first two elements class donkey, and the third class yogurt.
  elt0.position(50, 50);
  elt0.class('donkey');
  elt1.position(300, 50);
  elt1.class('donkey');
  elt2.position(550, 50);
  elt2.class('yogurt');
};


function draw() {

  
};

// On key press, hide all elements with class donkey.
function keyPressed() {
  var donkeys = getClass('donkey');
  for (var i=0; i<donkeys.length; i++) {
    donkeys[i].hide();
  }
};




