/*
// cria função - a e b são parâmetros da função
function soma(a, b){
    let result = a + b
    console.log(result)
}
// uso da função
soma(6, 8)

// cria outra função de subtração
function multiplicacao(a, b){
    let result = a * b
    return result
}
let resultado = multiplicacao(6, 8)
console.log(resultado)

// função anônima - sem nome
let subtracao = function (a, b){ // variável é uma função
    return a - b
}
// chama a função anônima
console.log(subtracao(6, 8))

// função sem parâmetro
let bomDia = function(){
    console.log("Tenham todos um bom dia")
}
bomDia()

// define um timeout
//setTimeout(function (){
//    console.log("Função será executada de 2 em 2 segundos")
//} , 2000)

// função com seta arrow function
let boaTarde = () => {
    console.log("Boa tarde")
}
boaTarde()

let divisao = (a, b) => { // com chave
    let result = a / b
    console.log(result)
}
divisao(8,6)

let boaMadruga = () => console.log("Zumbi") // sem chave
boaMadruga()

/* Crie uma arrow function chamada somarPares.
A função deve iterar sobre os números de 1 a 20.
Dentro dessa função, some todos os números pares (sem usar vetores). 
A função deve retornar o resultado da soma. */
/*
let somarPares = () => {
    let soma = 0
    for(let i = 1; i<=20; i++){
        if (i % 2 == 0){
            soma += i // soma = soma + i
        }
    }
    return soma
}
console.log(somarPares())

/* Dado um texto e dois índices, crie uma arrow function que use o 
método slice() para extrair e retornar uma substring do texto 
original. A substring deve começar no primeiro índice e terminar 
no segundo índice (exclusivo). */
/*
let pedaco = (nome, inicio, fim) => {
    return nome.slice(inicio, fim)
}
console.log(pedaco("Carlos Eduardo", 5, 12))
console.log(pedaco("Marcos da Silva", 3, 7))
console.log(pedaco("Leonardo de Deus", 7, 9))

let pedaco2 = (nome, inicio, fim) => {
    console.log(nome.slice(inicio, fim))
}
pedaco2("Carlos Eduardo", 5, 12)
pedaco2("Marcos da Silva", 3, 7)
pedaco2("Leonardo de Deus", 7, 9)
let aux = "Pegar Tudo"
pedaco2(aux, 0, aux.length)

// uso do map
let carros = ["celta", "palio", "onix", "uno"]
// map faz o for pra gente
// carro representa cada carro do vetor carros
carros.map( carro => console.log(carro))

carros.map( (carro, posicao) => console.log(carro + " " + posicao))


/* Crie uma função anônima que recebe um número como parâmetro 
e retorna `true` se o número for par, ou `false` se for ímpar. */
let verificaParImpar = (numero) => {
    if (numero % 2 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(verificaParImpar(19))
// com operador ternário
let verificaOT = (numero) => {
    return numero % 2 == 0 ? true : false
}

let boaNoite = () => {
    console.log("Boa noite")
}

/* Crie uma função anônima que recebe três números como parâmetros 
e retorna a média desses números. */
let media = (a, b, c) => {
    return (a + b + c) / 3
}
console.log(media(4, 6, 8))

// usando o map
let numeros = [10, 20, 30, 40]
// map retorna um outro vetor
let dobrado = numeros.map( bola => bola * 2)
console.log(dobrado)

let exe1 = [3, 4, 5, 6]
let quadrado = exe1.map( numero => numero * numero)
console.log(quadrado)

let exe2 = ["maça", "uva", "laranja", "caju"]
let maiusculo = exe2.map( palavra => palavra.toUpperCase())
console.log(maiusculo)

let exe3 = [1, 2, 3, 4]
let soma10 = exe3.map( numero => numero + 10)
console.log(soma10)

let exe4 = ["globo", "record", "bandeirantes", "Cazé TV"]
let concatena = exe4.map( canal => canal.concat(" - Processada"))
console.log(concatena)

let filtro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pares = filtro.filter( numero => numero % 2 == 0)
console.log(pares)


