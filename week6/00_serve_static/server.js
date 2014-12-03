// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

// tell the server to serve static files from a folder called public
// the word 'public' should match a folder of the same name you create
// in this directory
serveFiles('public');


// start the server
start();