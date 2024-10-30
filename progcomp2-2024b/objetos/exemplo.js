let prod1 = { // criamos um produto
    id: 1,
    nome: "Mouse Óptico",
    qtde: 12,
    preco: 90.56
}
let prod2 = { // criamos outro produto
    id: 2,
    nome: "Teclado mecânico",
    qtde: 30,
    preco: 154    
}
// vamos criar um vetor de objetos
let produtos = []
produtos.push(prod1)
produtos.push(prod2)
console.log(produtos)

// outra forma de criar vetor de objetos
let alunos = [
    {codigo: 123, nome: "Paulo", nota: 6.5},
    {codigo: 456, nome: "Pedro", nota: 7.5},
    {codigo: 789, nome: "João", nota: 9.5}
]
// faça um código que exiba os alunos com nota maior que 7
console.log(`Alunos com nota maior que 7`)
let exe1 = (vetor) => { 
    vetor.forEach(
        objeto => {
            if (objeto.nota > 7){
                console.log(objeto)
            }
        }
    )
}
exe1(alunos)
// faça um código que crie um novo vetor contendo os produto 
// com estoque abaixo de 20
let exe2 = (vetor) => {
    return vetor.filter(
        objeto => objeto.qtde < 20
    )
}
console.log(`Produtos com qtde < 10`)
console.log(exe2(produtos))