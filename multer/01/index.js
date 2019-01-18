const express = require('express');
const app = express();
const multer = require('multer');
var storage = multer.memoryStorage();

//É possível passar um diretório para o multer
//const upload = multer({ dest: 'uploads/' });
var upload = multer({ storage : storage });
const buffer = require('buffer');

//O storage permite definir o nome do arquivo.

/* var storage = multer.diskStorage({
    //onde salvar. Pode fazer tratamento, criar pasta, chamar funções assíncronas, tudo antes do callback
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //Qual o nome do arquivo, por exemplo, puxar no bd
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
 */

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

app.post('/', upload.single('img'), (req, res) => {
    let fileBuf = new Buffer.alloc(4, req.file.buffer, 'utf8');
    console.log(req.file.mimetype);
    if(fileBuf.toString() == 'OggS'){
        res.send('Ogg');
    } else {
        res.send('Não Ogg');
    }
    console.log(fileBuf.toString());
//    res.send('Arquivo Salvo');
})

app.listen(3000, () => console.log('running...'))

//fonte base: https://www.devpleno.com/multer-upload-de-imagens-com-nodejs-e-express/