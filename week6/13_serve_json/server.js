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
namesDB.add({name:"Alejandro", age:19, description:"I like cats and kittens."});
namesDB.add({name:"Mimi", age:20, description:"I live in Alberta and like to code."});
namesDB.add({name:"Gregor", age:85, description:"Craft beer and pickles and kale!"});
namesDB.add({name:"Ramie", age:9, description:"I like to color."});



// set up the routes
route('/', showAll);
route('/search/:person', showPerson);


// show all the names
function showAll(request){
  namesDB.getAll(gotNames);

  function gotNames(data){
    request.header("application/json");
    request.respond(JSON.stringify(data));
  }
}

function showPerson(request) {
  var personName = request.params.person;
  namesDB.search("name", personName, gotIt);

  function gotIt(data) {
    request.header("application/json");
    request.respond(JSON.stringify(data));
  }
}

start();
