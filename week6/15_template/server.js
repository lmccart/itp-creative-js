// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

var mydata = {
  title: "Things You Never Knew",
  date: "November 24, 2014",
  articleText: "Donec diam nibh, imperdiet ac lacus sit amet, accumsan tincidunt urna."
}

route('/', showPage);

function showPage(request) {
  request.render("mytemplate.html",mydata);
}

start();
