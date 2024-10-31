
const prompt = require('prompt-sync')()

// lista nome e nota de todos os alunos
let item1 = (vetor) => {
    vetor.forEach(
        objeto => console.log(`Nome: ${objeto.nome} e Nota: ${objeto.nota}`)
    )
} 


// encontrar o aluno com a maior nota 
let item2 = (vetor) => {
    let objMaiorNota = vetor[0]
    vetor.forEach(
        objeto => {
            if (objeto.nota > objMaiorNota.nota){
                objMaiorNota = objeto
            }
        }
    )
    console.log(objMaiorNota)
}


// para calcular a média das notas de todos os alunos
let item3 = (vetor) => {
    let soma = vetor.reduce(
        (acum, objeto) => acum + objeto.nota, 0
    )
    console.log(soma/5)
}


let principal = () => {
    let alunos = [
        { nome: "Paulo", idade: 17, nota: 6.0 },
        { nome: "Pedro", idade: 18, nota: 7.0 },
        { nome: "Lucas", idade: 19, nota: 8.0 },
        { nome: "João", idade: 20, nota: 9.0 },
        { nome: "Carlos", idade: 21, nota: 10.0 }
    ]
    // chamar a função item1
    // vamos fazer um menu de opções
    let opcao
    do{
        console.log(`Digite 1.Item 1 \n 2.Item 2 \n 3. Item 3 \n 4.Sair`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: item1(alunos); break
            case 2: item2(alunos); break
            case 3: item3(alunos); break
            case 4: console.log(`Vai sair`); break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 4)
}
principal()