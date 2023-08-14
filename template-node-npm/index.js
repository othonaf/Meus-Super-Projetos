import { countries } from "./countries.js"

const string = process.argv[2].toLowerCase()
const resultado = countries.filter(pais => pais.name.toLowerCase().includes(string))

console.table(resultado)

// EXERCÍCIO 1

    // const nome = process.argv[2]
    // const idade = Number(process.argv[3])
    // const novaIdade = (idade + 7)

    // console.log(`Olá, ${nome}! Você tem ${idade} anos e daqui há sete anos você terá ${novaIdade}. `)

// EXERCÍCIO 2

// const oper = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])
// var answer = ""

// switch(oper){
// 	case "add":
// 		answer = num1 + num2
// 		break;
// 	case "sub":
// 		answer = num1 - num2
// 		break;
//     case "mult":
//         answer = num1 * num2
//         break;    
//     case "div":
//         answer = num1 / num2
//         break;       
// }

// console.log(`Resposta: ${answer}`)

// EXERCÍCIO 3

// var tarefas = ["Lavar a louça", "Cozinhar"]

// var novaTarefa = process.argv[2]
// tarefas.push(novaTarefa)

// console.log(`Tarefa adicionada com sucesso: "${tarefas}" `)
