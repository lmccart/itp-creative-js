$(document).ready(function(){
  $.ajax({
    url: "lines.txt",
    dataType: 'text',
    success: function(data) {
      $("#sentences").html(data);
    },
    error: function() {
      alert("error");
    }
  });        
});