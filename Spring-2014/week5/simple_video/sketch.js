// Video
var video;

// Drawing context
// Temporary as eventually p5 may support drawing video into canvas directly?
var context;

function setup() {

  video = createHTML('<video id=\'vid\' src=\'fingers.mov\'></video>');
  video = document.getElementById('vid');
  video.play();
  // This will loop the video
  video.setAttribute('loop', true);
    // We could display the video as an element itself but here we will draw into a canvas instead
  video.style.display = 'none';

  // Other types of properties you can define
  /*video.style.position = "absolute";
  video.style.left = "320";
  video.style.top = "240px";
  video.setAttribute('width', 320);
  video.setAttribute('height', 240);
  video.setAttribute('controls',true);*/

  var canvas = createCanvas(640, 360);
  // need to keep track of the context to draw the video
  context = canvas.elt.getContext('2d');
}

function draw() {
  background(51);
  // Draw video into canvas
  context.drawImage(video,0,0,width,height);
}



