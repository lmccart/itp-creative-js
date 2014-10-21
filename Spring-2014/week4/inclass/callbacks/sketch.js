
var counter = 0;


function setup() {
	setTimeout(
		function() { 
			counter = counter + 1; 
			println(counter);
		}, 
		1000
	);
}
