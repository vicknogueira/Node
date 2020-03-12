var subtrai, some, divide, mult;
function subtracao(a, b){
    if(a < b){
        console.log(`${a} - ${b} é ${subtrai = b - a}`)
        return subtrai
    }else{
        console.log(`${a} - ${b} é ${subtrai = a - b}`)
        return subtrai
    }
   
}

function soma(a, b){
    // console.log()
    return `${a} + ${b} = ${some = a + b}`
}

function divisao(a, b){
    if(b != 0){
        console.log(`${a} / ${b} é ${divide = a / b}`)
        return divide
    }else{
        console.log("Não é possível dividir por '0'")
    }
}

function multiplica(a, b){
    console.log(`${a} * ${b} é ${mult = a * b}`)
    return mult
}

module.exports = {
    subtracao,
    soma,
    divisao,
    multiplica
}