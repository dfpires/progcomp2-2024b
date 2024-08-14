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
setTimeout(function (){
    console.log("Função será executada de 2 em 2 segundos")
} , 2000)

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

function Exemplo() {
    contador = 0;
    setInterval(function() {
        contador++;
        console.log(contador);
    }, 1000);
}

Exemplo();
