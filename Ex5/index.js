const funcoes = require("./funcoes");

const express = require("express")// importando o módulo express
const app = express()
let port = 8081 // porta 3000 ou 8081 depende do que estiver em uso

// send = uma função do express
//end = função do http
app.get('/', (req, res) => { // serve pra rota, e precisa sempre ter dois parametros
    res.send("<body style='text-align:center; display: grid; justify-content: center;'><h1 style='text-align: center;'>Deu certo!</h1></body>" + funcoes.soma(2, 3))// envia algo a tela
})
app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`)
    console.log(`Para derrubar o servidor ctrl + c`)
})

// funcoes.multiplica(2, 3)
// funcoes.divisao(2, 0)
// funcoes.subtracao(2, 3)