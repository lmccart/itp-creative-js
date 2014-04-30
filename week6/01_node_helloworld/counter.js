// Let's keep track of the # of requests
var counter = 0;

// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  // Incremement the counter
  counter++;
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('This is how many requests I\'ve handled: ' + counter);
  // Note that counter goes up by 2 if browser requests favicon
};

// HTTP module
var http = require('http');

// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');

