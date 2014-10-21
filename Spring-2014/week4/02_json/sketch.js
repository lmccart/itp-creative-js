
var foo = {
	bar: "new property",
	baz: 3
};

var JSONfoo = JSON.stringify(foo);
var backToFoo;


function setup() {
  print(foo);
  print(JSONfoo);
}

function draw() {

}

function mousePressed() {
	backToFoo = JSON.parse(JSONfoo);
	print(backToFoo);
}





