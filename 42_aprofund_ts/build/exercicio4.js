"use strict";
var IdadeHistorica;
(function (IdadeHistorica) {
    IdadeHistorica["Pr\u00E9Hist\u00F3ria"] = "Pr\u00E9-Hist\u00F3ria";
    IdadeHistorica["IdadeAntiga"] = "Idade Antiga";
    IdadeHistorica["IdadeM\u00E9dia"] = "Idade M\u00E9dia";
    IdadeHistorica["IdadeModerna"] = "Idade Moderna";
    IdadeHistorica["IdadeContempor\u00E2nea"] = "Idade Contempor\u00E2nea";
})(IdadeHistorica || (IdadeHistorica = {}));
const verificaIdadeHistorica = (ano, sigla) => {
    var idadeCerta = "";
    if (sigla === "") {
        sigla = "DC";
    }
    if ((ano <= 100000 && ano > 4000) && (sigla === "AC")) {
        idadeCerta = IdadeHistorica.PréHistória;
    }
    else if ((ano <= 4000 && ano > 476) && (sigla === "AC")) {
        idadeCerta = IdadeHistorica.IdadeAntiga;
    }
    else if ((ano >= 476 && ano < 1453) && (sigla === "DC")) {
        idadeCerta = IdadeHistorica.IdadeMédia;
    }
    else if ((ano >= 1453 && ano < 1789) && (sigla === "DC")) {
        idadeCerta = IdadeHistorica.IdadeModerna;
    }
    else if ((ano >= 1789) && (sigla === "DC")) {
        idadeCerta = IdadeHistorica.IdadeContemporânea;
    }
    else {
        console.error(Error);
    }
    var resposta = console.log(`A idade histórica é ${idadeCerta} !`);
    return resposta;
};
const descobrirAno = verificaIdadeHistorica(2120);
console.log(descobrirAno);
