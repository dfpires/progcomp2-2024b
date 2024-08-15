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