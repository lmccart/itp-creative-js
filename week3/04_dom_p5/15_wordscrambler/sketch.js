// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look an example that messes with user input text
// A ton more here!  https://github.com/shiffman/Programming-from-A-to-Z-F14

// The scrambled text
var scrambled = '';

// The user input
var input;

function setup() {
  noCanvas();
  
  // Grab the text field
  input = getElement('input');

  // A Grab the button
  var go = getElement('button');
  // Set up a function to handle when the button is pressed
  go.mousePressed(generate);
  
  // A paragraph element for the scrambled text
  scrambled = getElement('scrambled');
}

function generate() {
  // Clear the scrambled text
  var scrambledtext = '';

  // What has the user entered?
  var text = input.value();
  // Check to see if they entered something
  var len = text.length;
  if (text.length === 0) {
    alert('Enter something!');
  } else {
    // If they did, scramble up the text using string parsing
    for (var i = 0; i < len; i++) {
      var which = floor(random(text.length));
      scrambledtext += text.charAt(which);
      // Remove what was already used
      text = text.substring(0,which) + text.substring(which+1,text.length);
    }
    // Update the result
    scrambled.html(scrambledtext);
  }
}
