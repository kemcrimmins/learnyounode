var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
//console.log(urls);


var outputQueue = [];

for (var i = 0; i < urls.length; i++) {
	http.get(urls[i], function(response) {
		var output = '';

		response.setEncoding("utf8").on("data", function(data) {
			output += data;
		});

		response.on("end", function() {
			//console.log(output);
			outputQueue[i] = output;
			//console.log(i);
			console.log(outputQueue[i]);
			//i+=1;
			
		});
	});
}



	

	/*http.get(url2, function(response) {
		var output = '';

		response.setEncoding("utf8").on("data", function(data) {
			output += data;
		});

		response.on("end", function() {
			//console.log(output);
			outputQueue[1] = output;
			//console.log(outputQueue[1]);
			i+=1;
			console.log(i);
		});
	});

	http.get(url3, function(response) {
		var output = '';

		response.setEncoding("utf8").on("data", function(data) {
			output += data;
		});

		response.on("end", function() {
			//console.log(output);
			outputQueue[2] = output;
			//console.log(outputQueue[2]);
			i+=1;
			console.log(i);
		});
	});
} (i < 3); */