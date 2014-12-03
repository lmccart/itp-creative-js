// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001);

var data = {
  people: [
    {
      "name": "Brad",
      "city": "London"
    },
    {
      "name": "Jill", 
      "city": "Tokyo"
    },
    {
      "name": "Kate",
      "city": "New York"
    }
  ]
};
route('/', showPage);

function showPage(request) {
  request.render("mytemplate.html",mydata);
}

start();
