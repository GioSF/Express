var express = require('express');
var app = express();

//Routing
//Como o app responde a um client req para um determinado endpoint, que pode ser um URI ou um determinado método http.

//como o app responde a um GET em /
app.get('/', function(req, res){
    console.log('Resposta a um GET');
    res.send('Olá GET');
})

//como o app responde a um POST
app.post('/', function(req, res){
    console.log('Resposta a um POST');
    res.send('Olá, POST');
})

var nome = 'appdel';

//como o app responde a um DELETE utilizando uma variável 'nome' como URI
app.delete(`/${nome}`, function(req, res){
    console.log('Resposta a um DELETE');
    res.send('Olá, DELETE');
})

var uri = 'as';
//Como o app responde a um GET req para asd, asdf ,asdfdg, etc
app.get(`/${uri}*`, function(req, res){
    console.log(`Resposta a um GET para qq URI ${uri}`);
    res.send(`Olá, ${uri}`);
})



var server = app.listen(8000, function(){
    var port = server.address().port;
    var host = server.address().address;
    console.log('app listening em http://%s:%s', host, port);
})