// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-10: Interactive stripes

function Stripe() {
  // All stripes start at 0
  this.x = 0; 
  // All stripes have a random positive speed
  this.speed = random(1); 
  this.w = random(10,30);
  // A boolean variable keeps track of the object's state.
  this.mouse = false;
}

// Draw stripe
Stripe.prototype.display = function() {
  // Boolean variable determines Stripe color.
  if (this.mouse) { 
    fill(255);
  } else {
    fill(255,100);
  }
  
  noStroke();
  rect(this.x,0,this.w,height);
}

// Move stripe
Stripe.prototype.move = function() {
  this.x += this.speed;
  if (this.x > width + 20) this.x = -20;
}

// Check to see if point (mx,my) is inside the Stripe.
Stripe.prototype.rollover = function(mx, my) { 
  // Left edge is x, Right edge is x + w
  if (mx > this.x && mx < this.x + this.w) {
    this.mouse = true;
  } else {
    this.mouse = false;
  }
}

