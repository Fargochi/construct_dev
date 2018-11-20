var fs = require('fs');
var path = require('path');

// The zip library needs to be instantiated:
var zip = new require('node-zip')();

// You can add multiple files by performing subsequent calls to zip.file();
// the first argument is how you want the file to be named inside your zip,
// the second is the actual data:
zip.file('file1.txt', fs.readFileSync(path.join(__dirname, 'file1.txt')));
zip.file('file2.html', 'leroooooy');

var data = zip.generate({ base64:false, compression: 'DEFLATE' });

// it's important to use *binary* encode
fs.writeFileSync('test.zip', data, 'binary');