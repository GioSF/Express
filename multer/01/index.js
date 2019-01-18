const express = require('express');
const app = express();
const multer = require('multer');
var storage = multer.memoryStorage();
const fs = require('fs');

//É possível passar um diretório para o multer
//const upload = multer({ dest: 'uploads/' });
var upload = multer({ storage: storage });
const buffer = require('buffer');

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

app.post('/', upload.single('img'), (req, res) => {
    let fileBuf = new Buffer.alloc(4, req.file.buffer, 'utf8');
    console.log(req.file.mimetype);
    if (fileBuf.toString() == 'OggS') {
        if (req.file.size > 4000000) {
            res.send('Arquivo muito grande');
        } else {
            console.log(req.file.size);
            res.send('Ogg');
            fs.writeFile(`uploads/${req.file.originalname}`, req.file.buffer, function (err) {
                if (err) throw err;
                console.log(err);
            })
        }
    } else {
        res.send('Não Ogg');
    }
    console.log(fileBuf.toString());
    //    res.send('Arquivo Salvo');


})


app.listen(3000, () => console.log('running...'))

//fonte base: https://www.devpleno.com/multer-upload-de-imagens-com-nodejs-e-express/