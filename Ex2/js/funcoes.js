// var nome = "vick nogueira";
const titulo = "isso é um titulo";


//_________________ Colocando a primeira letra do nome Maiúsculo
function maiusculo(nome){
    var vetor = nome.split(' ')
    for(var i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toUpperCase())
    }
    // return "Maiusculo: " + vetor.join(' ')
    return vetor.join(" ")
    // return nome.toUpperCase()
}
// invocando a função maiúsculo


//________________ Colocando a primeira letra do nome Maiúsculo
function minusculo(nome){
    var vetor = nome.split(' ')
    for(var i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toLowerCase())
    }
    return vetor.join(' ')
    // return nome.toLowerCase()
}
// invocando a função maiúsculo


//_________________ Vendo quantas letras o nome possui
function comprimento(nome){
    var total = nome.length
    return "Total de letras: " + total + " letras"
}

// Para que essas funções sejam acessíveis para outro código outro arquivo
// vamos ter que exportar as funções
module.exports = {
    maiusculo, // função
    minusculo, // função
    comprimento, //função
    titulo  //constante
}