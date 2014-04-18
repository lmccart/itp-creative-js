var elt;

var counter = 0;

function setup() {
  elt = createHTML(counter);
  elt.style("padding:50px; font-size:50px;");

  // setTimeout() triggers a function at the number of milliseconds later
  setTimeout(next,1000);
}

// Here is the function that is triggered
function next() {
  elt.html(counter);
  counter++;

  // We recursively ask for this function to be triggered again one second later
  setTimeout(next,1000);
}