"use strict";
var PratosDoCardapio;
(function (PratosDoCardapio) {
    PratosDoCardapio["MACARRONADA"] = "Macarronada";
    PratosDoCardapio["LASANHA"] = "Lasanha";
    PratosDoCardapio["HAMBURGUER"] = "Hamburguer";
    PratosDoCardapio["PEIXEFRITO"] = "Peixe Frito";
})(PratosDoCardapio || (PratosDoCardapio = {}));
const pratos = [];
const cadastrarNovoProduto = (nome, custo, valorDeVenda, ingredientes) => {
    const novoPrato = { nome, custo, valorDeVenda, ingredientes };
    pratos.push(novoPrato);
    console.log(`O produto ${nome} foi cadastrado com sucesso!`);
};
cadastrarNovoProduto("Lasanha", 25.50, 55.50, ['Massa', 'Recheio', 'Molho']);
console.log("Cardápio:", pratos);
//{
//     nome: PratosDoCardapio.MACARRONADA, custo: 20.00, valorDeVenda: 40.00, 
//     ingredientes:[
//         "Macarrão","Molho de Tomate","Cebola","Queijo"
//     ]  
// }
