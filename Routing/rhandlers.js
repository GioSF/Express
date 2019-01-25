//Pode fornecer múliplos callbacks que se comportam como middlewares para manipular um request. Os callbacks devem invocar next() para bypass os callbacks de rota restantes.
//Isso pode ser usado para impor pré-condições em uma rota, depois passar o controle a rotas subsequentes se não há razão para continuar com a rota atual.

//Função callback única manipulando request

app.get('./', function(req, res){
    res.send('Chegou aqui');
})

//Mais de um callback

app.get('./', function(req, res, next){
    console.log('primeiro cb');
    next();
}, function(req, res){
    res.send('Chegou no segundo cb');
})

//Array de cb

var cb0 = function(req, res, next){
    console.log('cb0');
    next();
}

var cb1 = function(req, res, next){
    console.log('cb1');
    next();
}

var cb2 = function(req, res){
    res.send('chegou no cb2');
}

app.get('./', [cb0, cb1, cb2]);

