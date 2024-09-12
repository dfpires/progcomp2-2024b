const prompt = require('prompt-sync')();


// exercício 1
let vetParaMat = (vet) => {
    let auxMat = []
    auxMat[0] = vet.slice(0, 3)
    auxMat[1] = vet.slice(3, 6)
    auxMat[2] = vet.slice(6, 9)
    return auxMat
}
// exemplo 1 de utilização
let vet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
console.log(vetParaMat(vet))
// exemplo 2 de utilização
let vet2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(vetParaMat(vet2))

// exercício 2
let linhaMatriz = (mat, i) => {
    return mat[i]
}
let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(linhaMatriz(mat, 1))
console.log(linhaMatriz(mat, 0))
console.log(linhaMatriz(mat, prompt('Informe a linha')))


// exercício 3
let colunaMatriz = (mat, j) => {
    return mat.map(
        vetor => vetor[j]
    )
}
let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(colunaMatriz(mat, prompt(`Informe coluna`)))


let somaVetorMatriz = (mat) => {
    return mat.map(
        vetor => vetor.reduce(
            (acum, elem) => acum + elem, 0
        )
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vet = somaVetorMatriz(mat)
console.log(vet)


let produtoEscalar = (mat, vet2) => {
    return mat.map(
        (vetor, i) => vetor.reduce(
            (acum, elem) => acum + elem * vet2[i], 0
        )
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vet2 = [2, 3, 4]
let novoVetor = produtoEscalar(mat, vet2)
console.log(novoVetor)


const diagonalPrincipal = (mat) => 
    mat.map(
        (vetor, i) => vetor.filter(
            (elem, j) => i == j
        )[0]
    )

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let novoVetor = diagonalPrincipal(mat)
console.log(novoVetor)
*/
let vetorNaMatriz = (mat, vetInteresse, posInteresse) => {
    return mat.map(
        (vetor, i) => {
            if (i == posInteresse){
                return vetInteresse
            }
            return vetor
        }
    )
}
let mat = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
let vetInteresse = ['x', 'y', 'z']
let novaMatriz = vetorNaMatriz(mat, vetInteresse, 1)
console.log(novaMatriz)


let vetor = ["zeus", "casa", "amor"]
console.log(vetor.sort()) // vai funcionar


let vetor2 = [9, 100, 1]
console.log(vetor2.sort()) // não vai funcionar

let vetor3 = [9, 100, 1] // vai funcionar
console.log(vetor3.sort(
    (a, b) => a - b
))

let ordenaLinhasMat = (mat) => {
    return mat.map(
        vetor => vetor.sort(
            (a, b) => a - b
        )
    )
}
let matriz = [[8, 4, 1], [3, 1, 2], [5, 4, 9]]
console.log(ordenaLinhasMat(matriz))