var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arrayString = str.split('\n');

console.log(arrayString.length - 1);

