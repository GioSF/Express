const express = require('express');
const app = express();
const multer = require('multer');
var storage = multer.memoryStorage();
const fs = require('fs');

var upload = multer({ storage: storage });
const buffer = require('buffer');

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

app.post('/', upload.single('img'), (req, res) => {
    let fileBuf = new Buffer.alloc(4, req.file.buffer, 'utf8');
    console.log(req.file.mimetype);
    if (fileBuf.toString() == 'OggS') {
        if (req.file.size > 4000000) {
            res.send('File bigger than 4Mb');
        } else {
            console.log(req.file.size);
            res.send('Ogg file.');
            fs.writeFile(`uploads/${req.file.originalname}`, req.file.buffer, function (err) {
                if (err) throw err;
                console.log(err);
            })
            res.send('File saved.');
        }
    } else {
        res.send('Not a Ogg file.');
    }
    console.log(fileBuf.toString());

})

app.listen(3000, () => console.log('running...'))