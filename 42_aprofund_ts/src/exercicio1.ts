// Exercicio 1
// PRATICANDO O USO DE ENUM

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,

}

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"

}

const user1: Pessoa = {
    nome: "Othon",
    idade: 29,
    corFavorita: Cores.ANIL
}
console.log(user1)
