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
	console.log(request.params); // check what came in 

	// params correspond to the name of the form fields
	// for example, <input type="text" name="city">
	var content = "<p>The name submitted was: " + request.params.name + "</p>";
	content += "<p>The city submitted was: " + request.params.city + "</p>";
	request.respond(content);
}