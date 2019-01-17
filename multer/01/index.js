const express = require('express');
const app = express();
const multer = require('multer');
//É possível passar um diretório para o multer
// const upload = multer({ dest: uploads/})

const buffer = require('buffer');

//O storage permite definir o nome do arquivo.
/* const storage = multer.diskStorage({
    //onde salvar. Pode fazer tratamento, criar pasta, chamar funções assíncronas, tudo antes do callback
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //Qual o nome do arquivo, por exemplo, puxar no bd
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + req.filename)
    }

})
 */
var storage = multer.memoryStorage();
var upload = multer({ storage: storage })

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))

//Nunca usar middleware globalmente, por exemplo:
// app.use(upload.single('img'))
//Isso funcionaria mas significa salvar direto no servidor

//O multer é chamado antes da definição dos objetos req e res
//Parâmetros: rota, name, req res
app.post('/', upload.single('img'), (req, res) => {

    //O single.file é armazenado em req.file
    //Aqui fazer todo tratamento: que arquivo é esse, compactar, enviar para o s3
/*     response = {
        artista: req.body.artista,
        genero: req.body.genero,
        path: req.body.pathg
    };
 */
//Está na memória. Nao está gravando
    const buf = Buffer.alloc(3);
    buf.fill(req.file.buffer);
    if(buf.toString() == "Ogg"){
        console.log(buf.toString());
    } else {
        console.log(buf.toString());
    }
})

app.listen(3000, () => console.log('running...'))

//fonte base: https://www.devpleno.com/multer-upload-de-imagens-com-nodejs-e-express/