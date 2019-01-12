var express = require('express');
var app = express();

var options = {
    setHeaders: function (res, path, stat){
        res.set(Date.now);
    }
}
app.use(express.static('public', options));

app.get('/a', (req, res) => {
    //Método GET envia o response normalmente
    res.send('GET em /a');
    console.log('GET em /a');
})

var cidade = 'Santos';

app.get(`/user*${cidade}`, function(req, res){
    res.send(`Acessou a cidade ${cidade}`);
    console.log("req.body: " + req.body);
    console.log();
    
})

app.post('/', (req, res) => {
    //POST não envia resposta
    res.send('POST em /b');
    console.log('POST em /b');
})

app.listen(8000);