$(document).ready(function(){
  $.ajax({
    url: "data.json",
    dataType: 'json',
    success: function(data) {
      alert("First person is: " + data[0].name );
    },
    error: function() {
      alert("error");
    }
  });        
});