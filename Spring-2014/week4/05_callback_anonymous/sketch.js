var elt;

function setup() {
	elt = createHTML("hello world");
	elt.style("padding:50px; font-size:50px;");
	elt.mousePressed(function() {
  	elt.html("goodbye world");
	});
}
