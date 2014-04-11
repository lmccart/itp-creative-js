var scrambled = "";

function setup() {
  var form = createHTML("Please enter your name: <input id =\"name\" type=\"text\" name=\"name\">");
  form.id("form");
  form.position(10,50);
  
  var go = createHTML("<a href=\"#\">Scramble It!</a>");
  go.position(10,100);
  go.class('clickable');
  go.mousePressed(generate);
  
  scrambled = createHTML("");
  scrambled.position(10,150);
}

function generate() {
  var input = document.getElementById("name");
  var text = input.value;
  var scrambledtext = "";
  var len = text.length;
  if (text.length == '0') {
    alert("Enter something!");
  } else {
    for (var i = 0; i < len; i++) {
      var which = floor(random(text.length));
      scrambledtext += text.charAt(which);
      text = text.substring(0,which) + text.substring(which+1,text.length);
    }
    scrambled.html(scrambledtext);
  }
}


