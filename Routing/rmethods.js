//Route methods
//Derivados de métodos http e são anexados a uma instância da classe express

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('método get');
})

app.post('/', function(req, res){
    res.send('post request ao servidor');
})

// app.all le funcões middleware em um dado caminho para todos os métodos request.

app.all('/secret', function(req, res, next){
    console.log('acessando secret');
    next();//pasaa controle para o próximo handler
})
