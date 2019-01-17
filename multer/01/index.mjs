const express = require('express');
const app = express();
const multer = require('multer');
//É possível passar um diretório para o multer
// const upload = multer({ dest: uploads/})

const stream = require('stream');

//O storage permite definir o nome do arquivo.
const storage = multer.diskStorage({
    //onde salvar. Pode fazer tratamento, criar pasta, chamar funções assíncronas, tudo antes do callback
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    //Qual o nome do arquivo, por exemplo, puxar no bd
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.ogirinalname)
    }

})

//var storage = multer.memoryStorage();
const upload = multer({ storage })

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

//Nunca usar middleware globalmente, por exemplo:
// app.use(upload.single('img'))
//Isso funcionaria mas significa salvar direto no servidor

//O multer é chamado antes da definição dos objetos req e res
//Parâmetros: rota, name, req res
app.post('/', upload.single('img'), (req, res) => {
    //O single.file é armazenado em req.file


//    var uploadedFile = req.file;    
//    var bufferFile = uploadedFile.buffer;

    //Aqui fazer todo tratamento: que arquivo é esse, compactar, enviar para o s3
    response = {
        artista: req.body.artista,
        genero: req.body.genero
    };

    validateFile(req.filename);

    console.log(req.body, req.file)
    console.log(response.artista, response.genero);

    res.send('ok')
})


function validateFile(file) {
    var reader = fs.createReadStream(`${file}`);

    reader.on('data', (chunk) => {
        data += chunk;
    });

    reader.on('end', function () {
        var buf = new Buffer(32);
        buf.write(data, 0, 32, 'utf8');
        console.log(buf);
    });

    reader.on('error', function (err) {
        console.log(err.stack);
    });

    console.log('fim');
}

app.listen(3000, () => console.log('running...'))

//fonte base: https://www.devpleno.com/multer-upload-de-imagens-com-nodejs-e-express/