//EXERCÍCIO 2
// AGENDA DE CONSULTAS DE PACIENTES

type Pacientes = {
    nome: string,
    idade: number,
    dataDaConsulta: Date
}

const consulta: Pacientes[] = [
    { nome: "Othon", idade: 28, dataDaConsulta: new Date('2021-10-21') },
    { nome: "João", idade: 23, dataDaConsulta: new Date('2021-10-21') },
    { nome: "Pedro", idade: 31, dataDaConsulta: new Date('2021-07-02') },
    { nome: "Paula", idade: 26, dataDaConsulta: new Date('2021-07-02') },
    { nome: "Márcia", idade: 45, dataDaConsulta: new Date('2021-05-04') },
    { nome: "Flávio", idade: 29, dataDaConsulta: new Date('2021-06-15') },
  ]
  

const ordenaConsultaOrdemAlfabetica = (novoArray: Pacientes[]): Pacientes[] => {
        const consultasOrdenadas = [...consulta]
        consultasOrdenadas.sort(
            (consultaA, consultaB) => 
            consultaA.nome.localeCompare(consultaB.nome)
        )
        return consultasOrdenadas
 } 


 const consultasOrdenadas = ordenaConsultaOrdemAlfabetica(consulta);
console.log(consultasOrdenadas);