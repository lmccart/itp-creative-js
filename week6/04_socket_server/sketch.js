

var socket;

function setup() {
  createCanvas(600, 400);
  background(0);
  socket = io.connect('http://localhost');
  socket.on('mouse', 
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      fill(0,0,255);
      ellipse(data.x,data.y,32,32);
      //document.getElementById('messages').innerHTML += data;
    }
  );
}

function draw() {

}

function mousePressed() {
  fill(255);
  ellipse(mouseX,mouseY,32,32);
  sendmouse(mouseX,mouseY);
}

var sendmouse = function(xval, yval) {
  console.log("sendmouse: " + xval + " " + yval);
  socket.emit('mouse',{ x: xval, y: yval });
};