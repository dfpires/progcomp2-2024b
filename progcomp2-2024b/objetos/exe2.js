const prompt = require('prompt-sync')();

// cria o vetor estoque
let estoque = [
    {nome: "A", qtde: 10, preco: 8},
    {nome: "B", qtde: 5, preco: 20},
    {nome: "C", qtde: 15, preco: 3},
    {nome: "D", qtde: 18, preco: 2}
]
// item 1
let item1 = (vetor) => {
    vetor.forEach(
        obj => console.log(`Nome: ${obj.nome} Qtde: ${obj.qtde}`)
    )
}
item1(estoque)

// item2
let item2 = (vetor) => {
    // considerar que o menor valor em estoque é o primeiro produto
    let objMenorQtde = vetor[0]
    // percorre vetor procurando por uma qtde menor
    vetor.forEach(
        obj => {
                if (obj.qtde < objMenorQtde.qtde){
                    objMenorQtde = obj
                }
            }
    )
    console.log(objMenorQtde)
}
item2(estoque)

// item 3
let item3 = (vetor) => {
    let soma = vetor.reduce(
        (acum, obj) => acum + (obj.qtde * obj.preco), 0
    )
    console.log(`Total em estoque ${soma}`)
}
item3(estoque)

// item 4
let item4 = (vetor) => {
    vetor.push(
        {
            nome: prompt(`Informe nome`), 
            qtde: Number(prompt(`Informe qtde`)),
            preco: Number(prompt(`Informe preço`))
        }
    )
}
item4(estoque)