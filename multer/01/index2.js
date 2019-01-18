const express = require('express');
const app = express();
const multer = require('multer');
//É possível passar um diretório para o multer
// const upload = multer({ dest: uploads/})

const buffer = require('buffer');

//O storage permite definir o nome do arquivo.
var storage = multer.memoryStorage();
var upload = multer({ storage : storage });

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

/* function fileSaveToDisk() {
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    })

    app.post('/', upload.single('img'), (req, res) => {
        res.send('Arquivo Salvo');
    })

} */

//function fileValidationMem() {

app.post('/', upload.single('img'), (req, res) => {

    console.log(req.body, req.file.mimetype)
    //Está na memória. Nao está gravando
    const buf = new Buffer.alloc(3, req.file.buffer, 'hex');
    console.log(req.file.mimetype);
    console.log("Mem fora: " + buf);
    if (buf.toString() == "Ogg") {
        console.log("Mem if: " + buf.toString());
    } else {
        console.log("Mem else: " + buf.toString());
    }

    res.send('Arquivo Validado')
})
//}

app.listen(3000, () => console.log('running...'))

//fonte base: https://www.devpleno.com/multer-upload-de-imagens-com-nodejs-e-express/