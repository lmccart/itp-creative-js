$(document).ready(function(){
  $.getJSON("data.json", function(data) {
      alert("First person name is: " + data[0].name );
  });        
});