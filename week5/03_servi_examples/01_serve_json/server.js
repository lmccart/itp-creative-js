var servi = require('servi');

var app = new servi(true);

port(8080);


var data = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },
  phoneNumber: [
    {
      type: "home",
      number: "212 555-1234"
    },
    {
      type: "fax",
      number: "646 555-4567"
    }
  ],
  gender:{
    type:"male"
  }
};

function run(request) {

  request.header("application/json");
  request.respond(JSON.stringify(data));
}


if (typeof run === 'function') {
  app.defaultRoute(run);
}
start();