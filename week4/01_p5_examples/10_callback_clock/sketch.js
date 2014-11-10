var elt;

var counter = 0;

function setup() {
  elt = createP(counter);
  elt.style("padding:50px; font-size:50px;");

  // setInterval() triggers a function at the number of milliseconds later over and over
  setInterval(next,1000);
}

// Here is the function that is triggered
function next() {
  elt.html(counter);
  counter++;

  // If we used setTimeout, we could recursively ask for this function to be triggered again one second later
  // setTimeout(next,1000);
}