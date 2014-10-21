// http://popcornjs.org/
// http://popcornjs.org/popcorn-docs/

var pop;

// Drawing context
// Temporary as eventually p5 may support drawing video into canvas directly?
var context;

var footnote;

var particles;
var gravity = 0.1;


function setup() {

  particles = [];

  var video = createHTML("");
  video.id("container");
  video.size(320,240);

  var canvas = createCanvas(320, 240);

  footnote = createHTML("");
  footnote.id("footnotediv");

  pop = Popcorn.smart( "#container", "https://vimeo.com/87817306" );
  
  pop.footnote({
    start: 1,
    end: 5,
    text: "Popcorn!",
    target: "footnotediv"
  });

  pop.cue(1,newParticle);
  
  pop.play();
}

function draw() {
  background(51);
  for (var i = 0; i < particles.length; i++ ) { // Whatever the length of that array, update and display all of the objects.
    particles[i].gravity();
    particles[i].move();
    particles[i].display();
  }

  // The video element is stored in pop.media
}

function newParticle() {
  println("CUE");
  particles.push(new Particle());
}

