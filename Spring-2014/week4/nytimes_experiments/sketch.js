// Count term appearance in times per year
// Creative JS
// Daniel Shiffman

// An array of "Year" objects
var years = [];


// Make a url that searhces for term appeared in a given year
function makeURL(term,year) {
  var apikey = '&api-key=sample-key';
  var api = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&';
  var query = 'q='+term+'&facet_field=source&begin_date='+year+'0101&end_date='+year+'1231&facet_filter=true';
  var url = api+query+apikey;
  return url;
}

function setup() {
  createCanvas(800, 400);
  // Make year objects
  for (var year = 1950; year < 2014; year++) {
    years.push(new Year(year,'computer'));
  }

  // We will count through the array each time this function is called
  var count = 0;
  var grab = function() {
    years[count].loadData();
    count++;
  };

  for (var i = 0; i < years.length; i++) {
    // A little delay between each call so that we don't overload the API
    setTimeout(grab,i*100);
  }
}


function draw() {
  background(51);
  // Width of each bar
  var w = width/years.length;
  for (var i = 0; i < years.length; i++) {
    fill(255);
    stroke(0);
    // Draw each bar
    // Dividing by 50 is arbitrary
    rect(i*w,0,w,years[i].total/50);
    noFill();
    stroke(255);
    textAlign(CENTER);
    // Draw some years
    if (i % 5 === 0) {
      text(years[i].year,i*w+w/2,height/2);
    }
  }

}

// A new year object
function Year(y,t) {
  this.year = y;
  this.term = t;
  this.total = 0;
}

//a function to load the value
Year.prototype.loadData = function() {
  // Have to keep track of the context
  var self = this;
  // This will be the callback, store the value returned in total
  var loaded = function(data) {
    self.total = data.response.facets.source.terms[0].count;
  };
  // Load the data!
  loadJSON(makeURL(this.term,this.year), loaded);
};
