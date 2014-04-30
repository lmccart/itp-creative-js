// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  //console.log('Server has received a request from' + request);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
};

// HTTP module
var http = require('http');

// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');

