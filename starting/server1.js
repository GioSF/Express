var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
    console.log('Chegou no app.get index.html')
})

app.get('/app_getName', function(req, res){
    //Preparar saída em JSON em uma interface Response
    response = {
        pnome:req.query.pnome,
        snome:req.query.snome
    };
    console.log(response);
    res.end(JSON.stringify(response));

})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Listening em http//%s:%s`, host, port);
})