import express, { response } from "express";
import cors from "cors";
import { Request, Response } from 'express';
import { v4 as generateId } from 'uuid';
import { todos } from "./data";
import * as fs from 'fs';
import { todo } from "node:test";
import { error } from "node:console";
import { forEachChild } from "typescript";


const app = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 01 and EXERCÍCIO 02 on the file "data.ts" 

app.get('/todos', (req: Request, res: Response) => {
    res.status(201).send(todos)
})

// EXERCÍCIO 04
app.get('/tarefas/:status/:userId', (req: Request, res: Response) => {
    
        const taskStatus = req.params.status.toLowerCase()
        const userId = req.params.userId
        const userRight = todos.find(user => user.userId === userId)

        
        if (taskStatus === "done") {
            const taskDone = userRight?.todo.filter(task => task.completed)
            res.status(201).send(taskDone)
        }
        else if (taskStatus === "doing"){
            const taskDoing = userRight?.todo.filter(task => !task.completed)
            res.status(201).send(taskDoing)
        }
        else {
            res.status(400).end("Data not found!")
        }
        

})

// EXERCÍCIO 05
app.post('/create', (req: Request, res: Response) => {
    
    try {
        
        const taskTitle = req.body.title
        if(!taskTitle)
        throw new Error("You must enter a name for the new Task.");

        const newTask = {
            userId: generateId(),
            todo: [
                {
                    id: todos.length +1,
                    title: taskTitle,
                    completed: true
                }
            ]
        }

        todos.push(newTask)
        res.status(201).send(todos)
    
    } catch (error: any) {
        res.end(error.message);
    }
    
})

// EXERCÍCIO 06
app.post('/editar', (req: Request, res: Response) => {

    try {
        const searchTask = req.body.title
        const newState = req.body.completed
        
        // Searching a specific Task:
        const taskUpdated:any = todos.find(
            (user) => user.userId === searchTask)
        
        //Validating the Information.    
        if(!searchTask)
        throw new Error('This Task was not found or not existe!')   
    
        // Changing the Task status:
        taskUpdated.completed = !taskUpdated.completed
        
        res.status(201).send(taskUpdated)

    } catch (error: any) {
        res.end(error.message);
    }
})

// EXERCÍCIO 07
app.delete('/delete/:useId/:id', (req: Request, res: Response) => {
        try {
            const useId = req.params.useId
            const taskID = req.params.id

            if(!useId || !taskID)
                throw new Error("The User Id and Task Id are necessary.")
            
            for (const user of todos) {
                const todoIndex = user.todo.findIndex((task) => task.id === taskID)

                if (todoIndex !== -1) {
                    user.todo.splice(todoIndex, 1)
                } console.log(todoIndex)
            }
           
        res.status(201).send("Task Deleted!")
            

        } catch (error: any) {
            res.end(error.message)
        }
})

// EXERCÍCIO 08
app.get('/selectById', (req: Request, res: Response) => {
    try {
        
        const Id = req.query.id
        
        const selectedTask = todos.filter((todo) => todo.userId === Id)
            
        res.status(201).send(selectedTask)
        console.log(Id)

    } catch (error:any) {
        res.status(404).end("Id not found.")
    }
})

// EXERCÍCIO 09
app.post('/createByUser/:id', (req: Request, res: Response) => {
    
    try {
        const Id = req.params.id
        const taskTitle = req.body.title
        const user:any = todos.find((user) => user.userId === Id)

        if(!taskTitle || !Id)
        throw new Error("You must enter a name and the User Id for the new Task.");

         var newTask = 
            
                {
                    id: generateId(),
                    title: taskTitle,
                    completed: true
                }
                    
        user.todo.push(newTask)
        
        res.status(201).send("New task added suscesfully!")
    
    } catch (error: any) {
        res.end(error.message);
    }
    
})

// EXERCÍCIO 10

app.get('/selectandall', (req: Request, res: Response) => {
    
        try {
            
            const Id = req.query.id
            const selectedTask:any = todos.filter((todo) => todo.userId === Id)
            const othersTask = todos.filter((todo) => todo.userId !== Id)

            const newTodos = todos.map((todo) => {
                return {
                   selectedUser: selectedTask,
                   others: othersTask
                }})
                      
            
                
            res.status(201).send(newTodos)
               
        } catch (error:any) {
            res.status(404).end("Id not found.")
        }
    
})

// EXERCÍCIO 11

app.post('/editOnTheSource', (req: Request, res: Response) => {
    
    try {
        const taskTitle = req.body.title
        
        // Function to Add a new todo to the array "todos" 
        function adicionarAfazer(novoAfazer:any) {
            // Loading the File data.ts
            const dataFilePath = '/Users/Othon/OneDrive/Área de Trabalho/Backend/Meus-Super-Projetos/Aprofundamento-Express/src/data.ts';
            const data = require(dataFilePath);
        
            // Adding the new todo to the array "todos"
            data.todos.push(novoAfazer);
        
            // Write the updated file back to disk
            fs.writeFileSync(dataFilePath, `export const todos = ${JSON.stringify(data.todos, null, 2)};`, 'utf-8');
        }
        
        const novoAfazer = {
            userId: generateId(),
            todo: [
              {
                "id": todo.length +1,
                "title": taskTitle,
                "completed": false
              },
              
            ]
          };
  
            adicionarAfazer(novoAfazer); 
            res.status(201).send(novoAfazer) 
           
    } catch (error) {
        res.status(404).end(error)
    }   
    
});



app.listen(3003, () => {
    console.log("Servidor Ok!")
})

//https://nodejs.dev/pt/learn/reading-files-with-nodejs