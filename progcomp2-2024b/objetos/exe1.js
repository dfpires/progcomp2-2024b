let alunos = [
    { nome: "Paulo", idade: 17, nota: 6.0 },
    { nome: "Pedro", idade: 18, nota: 7.0 },
    { nome: "Lucas", idade: 19, nota: 8.0 },
    { nome: "João", idade: 20, nota: 9.0 },
    { nome: "Carlos", idade: 21, nota: 10.0 }
]
// lista nome e nota de todos os alunos
let item1 = (vetor) => {
    vetor.forEach(
        objeto => console.log(`Nome: ${objeto.nome} e Nota: ${objeto.nota}`)
    )
} 
// chamar a função item1
item1(alunos)

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
item2(alunos)

// para calcular a média das notas de todos os alunos
let item3 = (vetor) => {
    let soma = vetor.reduce(
        (acum, objeto) => acum + objeto.nota, 0
    )
    console.log(soma/5)
}
item3(alunos)