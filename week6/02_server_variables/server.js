// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

// have the server keep track of a variable "count"
var count = 0;

// tell the server to response with "Hello World"
function run(request) {

  // print which path is requested
  // console.log(request.pathname);   
   
  count++;
  request.respond("Hello World "+count);
}

// tell the server to run the "run" function on each request
app.defaultRoute(run);


// start the server
start();
