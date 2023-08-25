/* EXERCÍCIO 4
   --> DEFINIR IDADE HISTÓRICA DE UM DETERMINADO ANO
*/

enum IdadeHistorica {
    PréHistória = "Pré-História", //--------- = 100.000 AC 
    IdadeAntiga = "Idade Antiga", //----------- = 4.000 AC
    IdadeMédia = "Idade Média", //--------------- = 476 DC 
    IdadeModerna = "Idade Moderna", //---------- = 1453 DC 
    IdadeContemporânea = "Idade Contemporânea", // 1789 DC
}


const verificaIdadeHistorica = (ano:number, sigla?:string):any => {
    var idadeCerta = ""
    if (sigla === "") {
        sigla = "DC"
    }

    if ((ano <= 100000 && ano > 4000) && (sigla === "AC")) {
        idadeCerta = IdadeHistorica.PréHistória
    }
    else if ((ano <= 4000 && ano > 476) && (sigla === "AC")) {
        idadeCerta = IdadeHistorica.IdadeAntiga
    }
    else if ((ano >= 476 && ano < 1453) && (sigla === "DC")) {
        idadeCerta = IdadeHistorica.IdadeMédia
    }
    else if ((ano >= 1453 && ano < 1789) && (sigla === "DC")){
        idadeCerta = IdadeHistorica.IdadeModerna
    }
    else if ((ano >= 1789) && (sigla === "DC")) {
        idadeCerta = IdadeHistorica.IdadeContemporânea
    }
    else {
        console.error(Error);
        
    }
    
var resposta = console.log(`A idade histórica é ${idadeCerta} !`)
     return resposta
    
    
}

const descobrirAno = verificaIdadeHistorica(2120, )
console.log(descobrirAno)