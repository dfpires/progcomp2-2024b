const prompt = require('prompt-sync')();

/*
let matriz = []
for(let i=0;i<2;i++){
    matriz[i] = [] // cria um vetor de vetores
    console.log(`Informe os elementos da linha ${i}`)
    for(let j=0;j<2;j++){
        matriz[i][j] = prompt(`Informe uma letra na coluna ${j}`)
    }
}

/*
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
*/

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Criando a nova matriz usando map
let novaMatriz = matrizOriginal.map( vetor => 
    vetor.map( elemento => elemento * 2  )
)

// Exibindo a nova matriz
console.log("Matriz Original:");
console.log(matrizOriginal);

console.log("Nova Matriz com o Dobro dos Elementos:");
console.log(novaMatriz);

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(matrizOriginal[i][j])
    }
}

matrizOriginal.map(
    vetor => vetor.map(
        elemento => console.log(elemento)
    )
);