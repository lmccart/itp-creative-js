
function setup() {
  createCanvas(600, 400);
  noLoop();
  noStroke();
  textSize(20);

  loadXML("data.xml", drawData);
}

function draw() {
  background(255, 0, 0);
}


function drawData(data) {

  console.log(data);

  var foods = data.getElementsByTagName("food");
  for (var i=0; i<foods.length; i++) {

    var nameNode = foods[i].getElementsByTagName("name")[0];
    var name = nameNode.childNodes[0];
    console.log(name);
  }

}