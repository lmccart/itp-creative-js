


function setup() {
  var pos = { 
  				x: 100,
  				y: 50
  			};

  println(pos);

  var json = JSON.stringify(pos);
  println(json);

  var objagain = JSON.parse(json);
  println(objagain);

  createCanvas(600,400);
  background(175);
  fill(0);
  ellipse(objagain.x,objagain.y,50,50);

}
