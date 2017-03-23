var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function lineCount(err, fileContents) {
	if (err) {
		return console.log(err);
	}
	var arrayString = fileContents.split('\n');
	console.log(arrayString.length - 1);
});