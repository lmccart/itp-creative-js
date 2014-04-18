// In this example, we want to load a *large* (2MegaPixels)
// image and display it in setup().
//
// Since setup() happens quickly at the beginning, the image doesn't
// have time to properly load before setup() is done.
// 
// We are introducing preload() where you can run load
// operations that are guaranteed to complete by setup().
// This is called asynchronous loading, because it happens whenever
// the computer is done and ready, not necessarily when you call it.

var largeImage;



function preload() {
  largeImage = loadImage('large.jpg');   // loading the image here is too slow
  println("PRELOAD!");
}

function setup() {
  createCanvas(1300, 600);
  image(largeImage, 0, 0);
  println("SETUP!");
}

function draw() {

}

window.onload = function() {
	println("DOM LOADED!");
}

console.log("WINDOW NONSENSE");






