const prompt = require('prompt-sync')()

let mediaIdade = (vetor) => {
    let somaIdades = vetor.reduce(
        (acum, objeto) => acum + objeto.idade, 0 
    )
    console.log(`Média das idades ${somaIdades / vetor.length}`)
}

let consulta = (vetor) => {
    console.log(vetor)
}

let cadastra = (vetor) => {
    // vetor tem escopo local
    vetor.push({
        nome: prompt(`Informe nome do paciente`),
        idade: Number(prompt(`Informe idade do paciente`)),
        peso: Number(prompt(`Informe peso do paciente`)),
        altura: Number(prompt(`Informe altura do paciente`)),
        condicao: prompt(`Informe L (Leve), M (Moderada) e G (Grave)`).toUpperCase()
    })
    console.log(`Paciente cadastrado com sucesso`)
} 
let principal = () => {
    // pacientes tem escopo local
    let pacientes = [] // vetor vazio que vai guardar os pacientes
    cadastra(pacientes) // chama a função cadastra e passa o vetor como parâmetro
    cadastra(pacientes)
    consulta(pacientes)
    mediaIdade(pacientes)
}
principal()