// Scramble what the user enters into a text field

// The scrambled text
var scrambled = "";

function setup() {
  // A form
  var form = createHTML("Please enter your name: <input id =\"name\" type=\"text\" name=\"name\">");
  form.position(10,50);

  // Grab the text field
  var input = document.getElementById("name");
  input.value = "Type something here.";
  
  // A link that when clicked applies the generate() function
  var go = createHTML("<a href=\"#\">Scramble It!</a>");
  go.position(10,100);
  go.mousePressed(generate);
  
  // An HTML Element for the resulting text
  scrambled = createHTML("");
  scrambled.position(10,150);
}

function generate() {
  // Clear the scrambled text
  var scrambledtext = "";

  // Grab the text field
  var input = document.getElementById("name");

  // What has the user entered?
  var text = input.value;
  // Check to see if they entered something
  var len = text.length;
  if (text.length == '0') {
    alert("Enter something!");
  } else {
    // If they did, scramble up the text using string parsing
    for (var i = 0; i < len; i++) {
      var which = floor(random(text.length));
      scrambledtext += text.charAt(which);
      text = text.substring(0,which) + text.substring(which+1,text.length);
    }
    // Update the HTML Element
    scrambled.html(scrambledtext);
  }
}


