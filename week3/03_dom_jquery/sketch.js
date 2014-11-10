// ITP Networked Media, Fall 2014
// DOM Manipulation
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Let's look quickly at some JQuery for comparison

// This is like the 'load' window event
$(document).ready(function() {
   console.log("the dom is loaded!");

  // Elements are selected via '$'
  // css() sets a stytle
  $('#stuff').css('background-color','pink');
  $('#stuff').css('width','50%');
  $('#stuff').css('padding','10px');
  // This is assigning a mouse downevent
  $('#clicky').mousedown(function() {
    console.log("clickedme!");
    // innerHTML changed with html()
    $('h1').html('You clicked it!');
  });
});