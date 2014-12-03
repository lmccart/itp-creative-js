// adapted from https://github.com/robynitp/networkedmedia

// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// create an internal variable users to hold some data
var users = {
  Joe: {
    about: "I like cats and kittens.",
    age: 19
  },
  Jane: {
    about: "I live in Alberta and like to code.",
    age: 30
  },
  Morgan: {
    about: "Craft beer and pickles and kale!",
    age: 52
  }    
};

// set up routes
route('/', showHome);
route('/profile/:username',showProfile);


// define route handler functions
function showHome(request){
	request.respond("This is the home page.");
}

function showProfile(request){
	var name = request.params.username; 
	if (name in users){
		var about = users[name].about;
    var age = users[name].age;
		var content = "<h1>" + name + "</h1>";
		content += "<p>" + about + "</p>";
    content += "<p>I am " + age + " years old.</p>";
    	request.respond(content);
	} else {
		request.respond("<p>Could not find that user id</p>");
	}
}


// start the server
start();


