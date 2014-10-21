function Ball(x, y, gray) {
  this.xpos = x;
  this.ypos = y;
  this.radius = 30;
  this.gray = gray;
}

Ball.prototype.display = function() {
  ellipseMode(CENTER);
  fill(this.gray);
  ellipse(this.xpos, this.ypos, this.radius, this.radius);
};

Ball.prototype.move = function() {
	this.xpos++;
  if (this.xpos > width - this.radius) {
  	this.xpos = -this.radius;
  }
};