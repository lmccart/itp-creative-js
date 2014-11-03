var a;
var b;

function setup() {
  createCanvas(400, 400);
  a = new Apple(200, 300);
  b = new Apple(50, 100);
}

var draw = function() {
  background(255, 100, 0);
  a.update();
  a.display();
  b.update();
  b.display();
}

function Apple(a, b) {
  this.x = a;
  this.y = b;
  this.update = function() {
    this.x += 3;
    if (this.x > width) {
      this.x = 0;
    }
  }
}

// alternative way to add methods (instead of this.update...)
// Apple.prototype.update = function() {
//   this.x += 3;
//   if (this.x > width) {
//     this.x = 0;
//   }
// }


