var servi = require('servi');

var app = new servi(true);


serveFiles("public");


if (typeof run === 'function') {
  app.defaultRoute(run);
}
start();