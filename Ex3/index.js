// Criando um servidor

var http = require("http") //carregando o modo http do node
http.createServer(function(requisicao, resposta){
    resposta.end('<h1 style="color: purple;">Hello World this is my site!</h1>')
}).listen(3000);
//com isso eu crio um servidor
console.log("Meu servidor esta rodando!")