

var hello;

var porp;

var canvas;

var x = 0;
var y = 100;

function setup() {  

   porp = createHTMLImage("http://static.guim.co.uk/sys-images/Environment/Pix/columnists/2012/9/4/1346772666047/Finless-porpoise-in-the-a-007.jpg");

   hello = createHTML("<a href=\"#\">Hello</a>");
   hello.position(100,300);
   //hello.id("apple");
   hello.style("font-size:48pt;");

   porp.size(300,200);

   canvas = createCanvas(300,200);


   hello.mousePressed(resizePorpoise);


}

function resizePorpoise() {
  //background(255,0,0);
  porp.size(300+ random(-10,10),200+random(-10,10));
}

function draw() {
	//background(0);
    
    fill(0,0,255);
	ellipse(x,y,20,20);
	x++;
    
    //resizePorpoise();
	//porp.size(300+ random(-10,10),200+random(-10,10));

}

function mousePressed() {
  hello.id("pear");
}