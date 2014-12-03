// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// set up a database
// looks for a file called "people.db" or creates one if it doesn't exist
var namesDB = useDatabase("people"); 


// set up the routes
route('/', showAll);
route('/add/:person',addName);

/* 
    ==== Add a new name to the database ====

	If the URL is http://123.com/add/Jane, then the name "Jane" gets added to the DB
	The text "Jane" is added in an object with a property called "name", like this:
	{
	   name: "Jane"
	}
	Notice the flow of events and data:
	1. Define a route, '/add/:person', where ':person' is a variable 
	2. User visits that URL, as in http://123.com/add/Jane
	3. Grab the variable used in place of ':person', using 'request.params.person'. 
	   In this example, 'request.params.person' is equal to 'Jane'
*/
function addName(request){
	var personName = request.params.person;
	namesDB.add({name:personName});
	request.respond("Added "+personName);
}

// show all the names
function showAll(request){
	namesDB.getAll(gotNames);
	function gotNames(names){
		var namestext = "";
		for (i =0; i < names.length; i++) {
		    namestext += names[i].name + "<br/>";
		}
		request.respond( namestext );
	}
	
}

start();