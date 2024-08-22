let matriz = []
for(let i=0;i<4;i++){
    matriz[i] = [] // cria um vetor de vetores
    alert(`Informe os elementos da linha ${i}`)
    for(let j=0;j<4;j++){
        matriz[i][j] = prompt(`Informe uma letra na coluna ${j}`)
    }
}
console.log('Exibindo todos os elementos da matriz')
console.log(matriz)
console.log('Exibindo os elementos da diagonal principal')
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        if (i == j){
            console.log(matriz[i][j])
        }
    }
}
console.log('De outra forma')
for(let i=0;i<4;i++){
    console.log(matriz[i][i])
}
console.log('Exibindo os elementos da diagonal secundária')
for(let i=0;i<4;i++){
    console.log(matriz[i][3-i])
}
console.log('Elementos da linha 1')
for(let j=0;j<4;j++){
    console.log(matriz[1][j])
}
console.log('Elementos da coluna 2')
for(let i=0;i<4;i++){
    console.log(matriz[i][2])
}


