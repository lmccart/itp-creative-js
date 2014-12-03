// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);


// set up a database
// looks for a file called "people.db" or creates one if it doesn't exist
var namesDB = useDatabase("people"); 

// add some people to the db
namesDB.add({name:"Alejandro", age:19});
namesDB.add({name:"Mimi", age:20});
namesDB.add({name:"Gregor", age:85});
namesDB.add({name:"Ramie", age:9});

// each of these lines could also be written:
// var p = {
//   name: "Alexjandro",
//   age: 19
// };
// namesDB.add(p);


// set up the routes
route('/', showAll);


// show all the names
function showAll(request){
	namesDB.getAll(gotNames);

	function gotNames(names){
		var namestext = "";
		for (i =0; i < names.length; i++) {
		    namestext += names[i].name + " "+names[i].age+"<br/>";
		}
		request.respond( namestext );
	}
	
}

start();