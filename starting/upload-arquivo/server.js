  //server.js

const express = require('express')
    , app = express()
    , multer = require('multer');

    //dest: Where to store the files
    //multer limits: Specifying the limits can help protect your site against denial of service (DoS) attacks.
    const limits = {
        fieldNameSize: 10,
        fileSize: 300,
    };
    const upload = multer ({ dest: 'uploads/', limits: limits});

    app.use(express.static('public'));

    //In case you need to handle a text-only multipart form, you can use any of the multer methods (.single(), .array(), fields()), req.body contains the text fields Accept a single file with the name fieldName. The single file will be stored in req.file.
    
    //Parâmetros app.post:
    //1º rota
    //2º middleware multer:upload.single('file') indica que queremos o dado enviado com o name file, o mesmo name de <input type="name" name="file">
    //3º lidar com o req res

    //.single(fieldname) accept a single file with the name fieldname. The single file will be stored in req.file.
    app.post('/file/upload', upload.single('file'), (req, res) => {
    console.log(req.file.filename);
    console.log(req.file.originalname);
    console.log(req.file.size);
    res.send('<h2>Upload reslizado com sucesso</h2>')
    });

    app.listen(3000, () => console.log('App na porta 3000'));


//Fonte:
//https://github.com/expressjs/multer