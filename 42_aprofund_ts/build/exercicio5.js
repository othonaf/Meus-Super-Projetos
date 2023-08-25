"use strict";
var Descontos;
(function (Descontos) {
    Descontos["VERAO"] = "Ver\u00E3o";
    Descontos["INVERNO"] = "Inverno";
    Descontos["BANHO"] = "Banho";
    Descontos["INTIMAS"] = "\u00ECntimas";
})(Descontos || (Descontos = {}));
const listaDeProdutos = [
    { nome: "casaco", preco: 199.90, classificacao: Descontos.INVERNO },
    { nome: "Gorro", preco: 39.90, classificacao: Descontos.VERAO },
    { nome: "Maiô", preco: 59.90, classificacao: Descontos.BANHO },
    { nome: "Calção", preco: 49.90, classificacao: Descontos.INTIMAS }
];
const aplicaDesconto = (produto) => {
    let desconto = 0;
    switch (produto.classificacao) {
        case Descontos.VERAO:
            desconto = 5;
            break;
        case Descontos.INVERNO:
            desconto = 10;
            break;
        case Descontos.BANHO:
            desconto = 4;
            break;
        case Descontos.INTIMAS:
            desconto = 7;
            break;
    }
    const precoFinal = produto.preco * (1 - desconto / 100);
    return Object.assign(Object.assign({}, produto), { "preço com desconto": `${desconto}% (${precoFinal.toFixed(2)})` });
};
const produtosComDesconto = listaDeProdutos.map(aplicaDesconto);
console.log(produtosComDesconto);
