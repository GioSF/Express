//server2.js

const express = require('express')
    , app = express()
    , multer = require('multer');

    app.use(express.static('public'));

    var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});

var upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        console.log(ext);
//        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
    if(ext == '.pdf'){
            return callback(new Error('Only pdfs are allowed'))
        }
        callback(null, true)
    },
/*    limits:{
        fileSize: 1024 * 1024
    }*/
}).single('profilepic');

app.post('file_upload',function(req,res){
    console.log('chegou no app.post');
    var upload = multer({ storage : storage}).single('file');
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000, () => console.log('App na porta 3000'));
