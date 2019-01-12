var express = require('express');
var app = express();

//express.static é uma função middleware built-in do express. Ela serve arquivos estáticos é baseada no server-static.
app.use(express.static('img'));

var fig1 = 'googlelogo.png';
var fig2 = 'fblogo.png';

//responde a uma rq com o arquivo de nome variável
app.get('/', function(req, res){
    res.send('Opa!');
})

app.get(`/${fig1}`, function(req, res){
    res.send('Opa!');
})

app.get(`/${fig2}`, function(req, res){
    res.send('Opa!');
})

var server = app.listen(8000, function(){
    var port = server.address().port;
    var host = server.address().address;
    console.log('Listening em http://%s:%s', host, port);
})