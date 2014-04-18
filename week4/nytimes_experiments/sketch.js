// http://developer.nytimes.com

var term = 'happy';

var years = [];


function makeURL(year) {
  var apikey = '&api-key=sample-key';
  var api = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&';
  var query = 'q='+term+'&facet_field=source&begin_date='+year+'0101&end_date='+year+'1231&facet_filter=true';
  var url = api+query+apikey;
  return url;
}

function setup() {
  //createCanvas(1200, 400);

  /*var y2012 = createHTML("<a href=\'#\'>2013</a>");
  y2012.mousePressed(function() { grabTotal(2012); });
  y2012.position(10,420);

  var y2013 = createHTML("<a href=\'#\'>2012</a>");
  y2013.mousePressed(function() { grabTotal(2013); });
  y2013.position(100,420);*/

  var i ;
  for (var year = 1950; year < 2014; year++) {
     years.push(new Year(year));
  }
  noLoop();
}

function Year(y) {
  this.year = y;
  this.total = 0;
  var self = this;
  var loaded = function(data) {
    self.total = data.response.facets.source.terms[0].count;
    println(self.year,self.total);
  };
  loadJSON(makeURL(this.year), loaded);
}
