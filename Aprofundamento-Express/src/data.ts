import { v4 as generateId } from 'uuid';

// EXERCÍCIO 01
type Todo = {
    userId:any;
    id:number;
    title:string;
    completed:boolean

}
// EXERCÍCIO 02
//:Todo[]
export const todos = [
    {
        userId: "d5ce5377-1231-4e25-a783-648384191dd4",
        todo: [
            {
                id: "d5ce5377",
                title: "Varrer a casa",
                completed:false
            },
            {
                id: 3,
                title: "Ir ao cinema",
                completed:false
            }
        ]
    },
    {
        userId: "c658f740-d841-49fa-afa0-ca74b6b15679",
        todo: [
            {
                id: "d841",
                title: "Lavar a louça",
                completed:true
            },
            {
                id: 3,
                title: "Ir ao shopping",
                completed:false
            }
        ]
    },
    {
        userId: "cff25812-27df-4565-b8a2-d09e4568ed82",
        todo: [
            {
                id: 3,
                title: "Ir ao cinema",
                completed:false
            },
            {
                id: 3,
                title: "Fazer feira",
                completed:false
            }
        ]
    },
]