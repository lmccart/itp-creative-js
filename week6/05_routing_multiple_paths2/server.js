// adapted from https://github.com/robynitp/networkedmedia

// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

// set up routes
route('/', showHome);
route('/about', showAboutPage);

// define route handler functions
function showHome(request){
  request.respond("This is the home page.");
}

function showAboutPage(request){
  request.respond("<h1>About Me!!!</h1>");
}

// start the server
start();
