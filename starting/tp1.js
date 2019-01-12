var express = require('express');
var app = express();

// Apps em express utilizam um callback cujos parâmetros são objetos req e res
//O objeto req representa o request http e contém as propriedades para a string de request query, parâmetros, body, http headers e outros.
//O objeto res representa o response http que o app Express envia quando é solicitado um request http.

//É possível imprimir os objetos req e res para obter informações relativas a res/req como cookies, sessions, URL, etc.

app.get('/', function(req, res){
    res.send('Opa!');
    console.log(req.params.app + "\n" + req.path + "\n" + req.protocol + "\n" + req.rawHeaders);
})

//listen retorna um http server node e a aplicação (que é uma função) é colocada como callback
var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('App de exemplo listening em http://%s:%s', host, port);
})