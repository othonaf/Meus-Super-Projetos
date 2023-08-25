/*  EXERCÍCIO 5
    CRIAR NOVO ARRAY DE PRODUTOS COM DESCONTO.
*/

enum Descontos {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "ìntimas"
}

type Produtos = {
    nome: string,
    preco: number,
    classificacao: string
}

type ProdutoComDesconto = {
    nome: string,
    preco: number,
    classificacao: string,
    "preço com desconto": string
}

const listaDeProdutos: Produtos[] = [
    {nome: "casaco", preco: 199.90, classificacao: Descontos.INVERNO},
    {nome: "Gorro", preco: 39.90, classificacao: Descontos.VERAO},
    {nome: "Maiô", preco: 59.90, classificacao: Descontos.BANHO},
    {nome: "Calção", preco: 49.90, classificacao: Descontos.INTIMAS}
]

const aplicaDesconto = (produto: Produtos): ProdutoComDesconto => {
    let desconto = 0

    switch (produto.classificacao) {
        case Descontos.VERAO:
            desconto = 5
            break;
        case Descontos.INVERNO:
            desconto = 10
            break;
        case Descontos.BANHO:
            desconto = 4
            break;
        case Descontos.INTIMAS:
            desconto = 7
            break;
    }

    const precoFinal = produto.preco *(1- desconto / 100)
    return {
        ...produto,
        "preço com desconto": `${desconto}% (${precoFinal.toFixed(2)})`
    }
}
const produtosComDesconto: ProdutoComDesconto[] = listaDeProdutos.map(aplicaDesconto);
console.log(produtosComDesconto)