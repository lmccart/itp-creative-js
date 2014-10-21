// Scramble what the user enters into a text field

// The scrambled text
var scrambled = "";
var input;

function setup() {
  noCanvas();


  // A form
  var label = createDiv("Please enter your name: <br/>");
  label.id("form");
  input = createInput();
  input.value("Type something here.");
  input.parent("form");
  
  // A link that when clicked applies the generate() function
  var go = createButton("Scramble It!");
  go.mousePressed(generate);
  go.parent("form");
  
  // An HTML Element for the resulting text
  scrambled = createP("");
}

function generate() {
  // Clear the scrambled text
  var scrambledtext = "";

  // What has the user entered?
  var text = input.value();
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

function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}

