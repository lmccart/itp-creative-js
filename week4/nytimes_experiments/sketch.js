// http://developer.nytimes.com

var term = 'terrorist';

var years = [];


function makeURL(year) {
  var apikey = '&api-key=sample-key';
  var api = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&';
  var query = 'q='+term+'&facet_field=source&begin_date='+year+'0101&end_date='+year+'1231&facet_filter=true';
  var url = api+query+apikey;
  println(url);
  return url;
}

function setup() {
  createCanvas(800, 400);
  for (var year = 2000; year < 2014; year++) {
    years.push(new Year(year));
     /*setTimeout(
      function() {
        years.push(new Year(year));
      },
      1000);*/
  }
}


function draw() {
  background(51);
  var w = width/years.length;
  for (var i = 0; i < years.length; i++) {
    fill(255);
    stroke(0);
    rect(i*w,0,w,years[i].total/50);
    noFill();
    stroke(255);
    textAlign(CENTER);
    text(years[i].year,i*w+w/2,height/2);
  }

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
