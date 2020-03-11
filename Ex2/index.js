// var nome = "vick nogueira";
// var vetor = nome.split(' ')
// //_________________ Colocando a primeira letra do nome Maiúsculo
// function maiusculo(){
//     for(var i = 0; i < vetor.length; i++){
//         vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toUpperCase())
//     }
//     console.log("Maiusculo: "+vetor.join(' '));
// }
// // invocando a função maiúsculo
// maiusculo()


// //________________ Colocando a primeira letra do nome Maiúsculo
// function minusculo(){
//     for(var i = 0; i < vetor.length; i++){
//         vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toLowerCase())
//     }
//     console.log("Minusculo: " + vetor.join(' '));
// }
// // invocando a função maiúsculo
// minusculo()


// //_________________ Vendo quantas letras o nome possui
// function comprimento(){
//     var total = nome.length
//     console.log(`\nTotal de letras: ${total} letras`)
// }
// comprimento()

//__________ Importando as funções
var funcoes = require("./js/funcoes")
var resposta = funcoes.maiusculo("aaaa eeee")
console.log("Maiusculo: " + resposta)
console.log(funcoes.comprimento(resposta))
console.log(funcoes.titulo)