"use strict";
const consulta = [
    { nome: "Othon", idade: 28, dataDaConsulta: new Date('2021-10-21') },
    { nome: "João", idade: 23, dataDaConsulta: new Date('2021-10-21') },
    { nome: "Pedro", idade: 31, dataDaConsulta: new Date('2021-07-02') },
    { nome: "Paula", idade: 26, dataDaConsulta: new Date('2021-07-02') },
    { nome: "Márcia", idade: 45, dataDaConsulta: new Date('2021-05-04') },
    { nome: "Flávio", idade: 29, dataDaConsulta: new Date('2021-06-15') },
];
const ordenaConsultaOrdemAlfabetica = (novoArray) => {
    const consultasOrdenadas = [...consulta];
    consultasOrdenadas.sort((consultaA, consultaB) => consultaA.nome.localeCompare(consultaB.nome));
    return consultasOrdenadas;
};
// function organizarConsultasPorData(consultas: Pacientes[]): Pacientes[] {
//     const consultasOrdenadas = [...consultas]; // Criar uma cópia do array original
//     consultasOrdenadas.sort((consultaA, consultaB) =>
//       consultaA.dataDaConsulta.getTime() - consultaB.dataDaConsulta.getTime()
//     );
//     return consultasOrdenadas;
//   }
const consultasOrdenadas = ordenaConsultaOrdemAlfabetica(consulta);
console.log(consultasOrdenadas);
