// http://developer.nytimes.com

var data;

function preload() {
  data = loadJSON("http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&q=obama&api-key=sample-key");
}


function setup() {
  createCanvas(1200, 400);
  noLoop();
}

function draw() {
	var docs = data.response.docs;
	for (var i=0; i<docs.length; i++) {
		text(docs[i].snippet, 100, 100*i);
	}
}
