var express = require('express');
var app = express();
var body_parser = require('body-parser');

//Criar application/x-www-form-urlencoder parser
var urlencodedParser = body_parser.urlencoded({extended:false});

app.use(express.static('public'));
//indexpost.html utiliza get
app.get('/indexpost.html', function(req,res){
    res.sendFile(__dirname + "/" + "indexpost.html");
})

app.post('/process_post', urlencodedParser, function(req, res){
    //Prepara JSON response
    response = {
    first_name:req.body.first_name,
    second_name:req.body.second_name
    };

    console.log(response);
    res.end(JSON.stringify(response));

})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Listening to http://%s:%s`, host, port);
})

app.post('/')