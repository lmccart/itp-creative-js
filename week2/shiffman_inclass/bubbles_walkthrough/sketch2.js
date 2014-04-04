
var bubble;

var bubble2;

function setup() {
  createCanvas(600,400);
  bubble = {
    x : width/2,
    y : height,
    move : function() {
      this.x = this.x + random(-1,1);
      this.y = this.y - 1;
    }
  };

  bubble2 = Object.create(bubble);
  bubble2.x = width/4;
  bubble2.y = height;
}



function draw() {
  background(50);

  fill(125);
  stroke(255);
  ellipse(bubble.x,bubble.y,48,48);
  ellipse(bubble2.x,bubble2.y,48,48);

  bubble.move();
  

}



