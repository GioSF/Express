import { isAbsolute } from "path";

//Route Paths, junto com requests, definem os endpoits nos quais os requests podem ser feitos. Rotas podem ser strings, string patterns ou expressões regulares

//Exemplos de route paths baseados em strings.

//Este path ira casar com a rota raiz /.
app.get('./', function(req, res){
    res.send('get');
})

//Esta rota encontra requests para /about
app.get('/about', function(req, res){
    res.send('caminho /about');
})

//esta rota encontra requests para /random.txt
app.get('/random.txt', function(req, res){
    res.send('request para random.txt');
})

//Exemplos de paths baseados em string patterns
app.get('/ab?cd', function(req, res){
    res.send('response para /acd /abcd');
})

app.get('/ab+cd', function(req, res){
    res.send('responde /abcd /abbcd /abbbcd');
})

app.get('/ab*cd', function(req, res){
    res.send('responde a /abcd /abwoednewodncd etc');    
})

app.get('/ab(cd)?e', function(req, res){
    res.send('responde a /abe e /abcde')
})

app.get('/a/', function(req, res){
    res.send('responde a qualquer coisa que tenha a');
})

app.get('/.*fly$/', function(req, res){
    res.send('response a butterfly e dragonfly mas não a aaflyaa');
})


Route parameters

//Segmentos de URL nomeados que são usados para capturar valores específicados em sua posição no URL. Os valores capturados populam o objeto req.param com o nome do parâmetro de rota especificado no path como sua chave.

/* Route path: /users/:userId/books:/:bookId
Request URL: http://localhost:3000/users/34/books/8989*/
req.params: { "userId": "34", "bookId": "8989" }

. e - são literais
//Route path: /flights/:from-:to
//Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

//Route path: /plantae/:genus.:species
//Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }

