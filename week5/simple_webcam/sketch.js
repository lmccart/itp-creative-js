// Video
var video;

// Drawing context
// Temporary as eventually p5 may support drawing video into canvas directly?
var context;

function setup() {
  var canvas = createCanvas(640, 360);
  // need to keep track of the context to draw the video
  context = canvas.elt.getContext('2d');
  initCam();
}

function draw() {
  background(51);
  // Draw video into canvas
  context.drawImage(video,0,0,width,height);
};

function initCam() {
  // Make an invisible video DOM element
  video = createHTML('<video id=\'vid\'></video>');
  video = document.getElementById('vid');
  video.setAttribute('autoplay',true);
  video.style.display = 'none';

  // For cross-browser support
  navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  
  // Get a stream of video from the user
  navigator.getUserMedia(
    // First argument is an object that tells us if we want audio and/or video
    { video: true, audio: false }, 
    // Second argument is a function that assigns a 'stream' to the video's source
    function(stream) {
      video.src = window.URL.createObjectURL(stream);
    }, 
    // Third argument is the callback if the user rejected
    rejected
  );  

  var rejected = function(e) {
    // The user rejected capturing
    // We could handle this however we want
    console.log('User said no!', e);
  };
}




