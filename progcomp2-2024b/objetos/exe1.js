
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
    console.log(soma/vetor.length)
}

let item4 = (vetor) => {
    vetor.push({
        nome: prompt(`Informe o nome do aluno`),
        idade: Number(prompt(`Informe idade do aluno`)),
        nota: Number(prompt(`Informe nota do aluno`))
    })
}

let principal = () => {
    let alunos = []
    // chamar a função item1
    // vamos fazer um menu de opções
    let opcao
    do{
        console.log(`Digite\n 1.Lista \n 2.Maior nota \n 3.Média \n 4.Cadastra \n5. Sair`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: item1(alunos); break
            case 2: item2(alunos); break
            case 3: item3(alunos); break
            case 4: item4(alunos); break
            case 5: console.log(`Vai sair`); break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}
principal()