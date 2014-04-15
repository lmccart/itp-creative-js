// http://developer.nytimes.com

var data;

function preload() {
  data = loadJSON("http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&q=obama&api-key=sample-key");
}


function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
	console.log(data);
  // for (var i=0; i<lines.length; i++) {
  // 	text(lines[i], 5, 10*i);
  // }
}
