// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

function Ball(tempX, tempY, tempW) {
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.speed = 0;

  this.gravity = function() {
    // Add gravity to speed
    this.speed = this.speed + gravity;    
  }

  this.move = function() {
    // Add speed to y location
    this.y = this.y + this.speed;
    // If square reaches the bottom
    // Reverse speed
    if (this.y > height) {
      this.speed = this.speed * -0.95;
      this.y = height;
    }    
  }

  this.display = function() {
    // Display the circle
    fill(255, 100);
    stroke(255);
    ellipse(this.x,this.y,this.w,this.w);    
  }
}
