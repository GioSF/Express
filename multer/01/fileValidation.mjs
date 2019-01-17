var fs = require ("fs");
var data = '';
var buffer = require('buffer');

function validateFile(file){
    var reader = fs.createReadStream(`${file}`, {start: 0, end: 4});
    console.log('validateFile path: ' + path);

    reader.on('data', (chunk) => {
        data += chunk;
        reader.pause();
        const buf = Buffer.alloc(5);
        buf.fill(data);
        console.log("on: " + buf.toString());
        console.log("on: " + data);
    });

    reader.on('end', function () {
        var buf = Buffer.alloc(4);
        console.log("end: " + buf);
    });

    reader.on('error', function (err) {
        console.log(err.stack);
    });

    console.log('fim');
}