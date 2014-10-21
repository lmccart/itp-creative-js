function SuperBall(x, y, gray) {
  // Call the parent constructor
  Ball.call(this, x, y, gray);
  console.log(this);
}

SuperBall.prototype = new Ball();

SuperBall.prototype.constructor = SuperBall;

// This overwrites the Ball move method
SuperBall.prototype.move = function() {
  this.xpos += 2;
  if (this.xpos > width - this.radius) {
  	this.xpos = -this.radius;
  }
};

// This adds a new method that only SuperBall has
SuperBall.prototype.change = function() {
  this.gray = sin(frameCount*0.1)*125+125;
};

