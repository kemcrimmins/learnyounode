var fs = require('fs');

module.exports = function (dirName, fileExtension, callback){
		fs.readdir(dirName, function(err, list){
			if (err) return callback(err);

			var filteredLS = [];
			for (var i = 0; i < list.length; i++){
				if (list[i].endsWith("."+fileExtension)){
					filteredLS.push(list[i]);
				}
			}
			callback(err, filteredLS);
		});
	};

	// Need to handle errors...