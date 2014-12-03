// adapted from https://github.com/robynitp/networkedmedia

// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

// set up routes
route('/', showHome);
route('/about', showAboutPage);
route('/profile/:username',showProfile);

// define route handler functions
function showHome(request){
  request.respond("This is the home page.");
}

function showAboutPage(request){
  request.respond("<h1>About Me!!!</h1>");
}

function showProfile(request){
  // grab the username
  var username = request.params.username;

  // create the content for the response
  var content = "<h1>" + username + "</h1>";
  content += "<p>All the user's info here</p>";

  // respond with the content
  request.respond(content);
}


// start the server
start();
