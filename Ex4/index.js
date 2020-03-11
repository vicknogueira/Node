//Próximo passo criar  a identidade do projeto:
// npm init
/* Foi criado o arquivo package.json (javascript object notation)
que contém informações do projeto
instalar o framework de node -> express
executar o comando: npm install express

*/
let express = require("express")// importando o módulo express
let app = express()
let port = 8081
app.get('/', (req, res) => { // serve pra rota, e precisa sempre ter dois parametros
    res.send('<h1>Hello world!</h1>')// envia algo a tela
})
app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`)
    console.log(`Para derrubar o servidor ctrl + c`)
})