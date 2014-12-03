var servi = require('servi');
var app = new servi(true);

port(3000);
start();

// --- routes --- //
route('/', showForm);

// the route here must match the URL in the form element
// eg, <form method="get" action="/submitform">
route('/submitform', handleForm);

// --- handlers --- //
function showForm(request){
	// Show the form file
    request.serveFile('form.html');
}

function handleForm(request) {
	// for post requests, the values come in the request.fields object

	console.log(request.fields); // check what came in 
 
	var content = "<p>The name submitted was: " + request.fields.name + "</p>";
	content += "<p>Preferred pet: " + request.fields.pet + "</p>";
	request.respond(content);
}