// var lines;

// function preload() {
//   lines = loadStrings("lines.txt");
// }

function setup() {
  noLoop();
  loadStrings("lines.txt", doText);
}

function doText(data) {
	for (var i=0; i<data.length; i++) {
    var txt = createP(data[i]);
    txt.position(5,20*i+20);
  }
}


