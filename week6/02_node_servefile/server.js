
// HTTP Portion
var http = require('http');

// Using the filesystem module
var fs = require('fs');

// Start our server
var server = http.createServer(handleRequest);
server.listen(8080);

function handleRequest(req, res) {
  // User file system module to read index.html file
  fs.readFile(__dirname + '/index.html',
    // Callback function for reading
    function (err, data) {
      // if there is an error
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
      // Otherwise, send the data, the contents of the file
      res.writeHead(200);
      res.end(data);
    }
  );
}