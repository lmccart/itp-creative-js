// HTTP module
var http = require('http');
// URL module
var url = require('url');

// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Grab the path from the request's url
  var pathname = url.parse(request.url).pathname;
  // Test if it's equal to one
  if (pathname == '/one') {
    response.end('One\n');
  } else if (pathname == '/two') {
    response.end('Two\n');    
  } else {
    response.end('Hello World\n');        
  }
};


// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');



