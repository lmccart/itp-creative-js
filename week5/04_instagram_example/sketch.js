
function setup() {
  var url = "https://api.instagram.com/v1/media/search?lat=40.7127&lng=74.0059&client_id=41fc508443ae4954adbf453ec6265f1e";
  loadJSON(url, handleData);
}

function handleData(jsonData) {
  console.log(jsonData.data.length);

  var pics = jsonData.data;

  for (var i=0; i<pics.length; i++) {
    createImg(pics[i].images.thumbnail.url);
  }
}

