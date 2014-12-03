// adapted from https://github.com/robynitp/networkedmedia

// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// create an internal variable users to hold some data
var users = [
  {
    name:  "Joe",
    about: "I like cats and kittens."
  },
  {
    name:  "Jane",
    about: "I live in Alberta and like to code."
  },
  {
    name:  "Morgan",
    about: "Craft beer and pickles and kale!"
  }    
];

// set up routes
route('/', showHome);
route('/profile/:userid',showProfile);


// define route handler functions
function showHome(request){
	request.respond("This is the home page.");
}

function showProfile(request){
	var id = request.params.userid; 
	if (id < users.length){
		var name = users[id].name;
		var about = users[id].about;
		var content = "<h1>" + name + "</h1>";
		content += "<p>" + about + "</p>";
    	request.respond(content);
	} else {
		request.respond("<p>Could not find that user id</p>");
	}
}


// start the server
start();


