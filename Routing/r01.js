//Routing significa como endpoits de uma aplicação respondem a requests de clientes.
//Define-se routing usando métodos do objeto express app que correspondam ao método http: app.get, app.post ou app.all()
//app.use() especifica um middleware como função callback
// cb (handler functions) são chamados quando uma aplcação recebe um request de um endpoint e método http. métodos routing podem chamar vários callbacks como argumentos. Com múltiplos cb é importante chamar next() dentro do corpo da função para passar o controle para o próximo cb.

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Opa');
})

