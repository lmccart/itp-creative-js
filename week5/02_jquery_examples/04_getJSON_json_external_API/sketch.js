$(document).ready(function(){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial", function(data) {
      alert("Temperature is: " + data.main.temp );
  });        
});