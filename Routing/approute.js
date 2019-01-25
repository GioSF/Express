//Pode criar handlers de rotas encadeáveis para uma rota utilizando app.route(). Como o caminho é espcificado em um único lugar, criar rotas modulares é útil pois reduz redundância e typos.

app.route('./livro')
.get(function(req, res){
    res.send('Get');
})
.post(function(req, res){
    res.send('adicionar livro');
})
.put(function(req, res){
    res.send('Update do livro');
})
