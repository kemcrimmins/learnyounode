var modularFilter = require("./filterLsmodule");
var dirName = process.argv[2];
var fileExtension = process.argv[3];
//var filteredLS = modularFilter(dirName, fileExtension);

function printFilteredLS (err, filteredLS){
	if (err) {
		console.log(err);
	}

	for (var i = 0; i < filteredLS.length; i++){
		console.log(filteredLS[i]);
	}
}

modularFilter(dirName, fileExtension, printFilteredLS);
