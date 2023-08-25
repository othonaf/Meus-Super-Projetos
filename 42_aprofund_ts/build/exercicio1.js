"use strict";
// exercicio 1
var Cores;
(function (Cores) {
    Cores["VERMELHO"] = "Vermelho";
    Cores["LARANJA"] = "Laranja";
    Cores["AMARELO"] = "Amarelo";
    Cores["VERDE"] = "Verde";
    Cores["AZUL"] = "Azul";
    Cores["ANIL"] = "Anil";
    Cores["VIOLETA"] = "Violeta";
})(Cores || (Cores = {}));
const user1 = {
    nome: "Othon",
    idade: 29,
    corFavorita: Cores.ANIL
};
console.log(user1);
