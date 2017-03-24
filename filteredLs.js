/* filters directory listing, 
   first parameter (process.argv[2]) is path
   second paramater (process.argv[3]) is the extension. */

var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
	if (err) {
		return console.log(err);
	}
	for (var i = 0; i < list.length; i++){
		if (list[i].endsWith("." + process.argv[3])) {
			console.log(list[i]);
		}
	}
});