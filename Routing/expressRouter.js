//Uso de classe Router na criação de handlers modulares, montáveis. Uma instânci de Routeré um middleware competo e um sistema de rotas.

//Este arquivo cria um Router como um mulo, lê uma função middleware nela, define algumas rotas e monta um router module em um caminho para o app principal.

var express = require('express');
var router = express.Router();

//middleware específico a este router
router.use(function timeLog(req, res, next){
    console.log('Hora: ' + Date.now());
})

//Definição da homepage
router.get('/', function(req, res){
    res.send('Homepage principal');
})

//Definir outra rota
router.get('/sobre', function(req, res){
    res.send('Página sobre');
})

module.exports = router;

//Este arquivo será salvo como birds.js e carregado por outro arquivo com o app principal

var homepage = require('./birds');

app.use('/birds', homepage);

//O app agora está apto a a handle requests de /birds e /birds/sobre assim como chamar a função middleware timeLog que é específica para essa rota