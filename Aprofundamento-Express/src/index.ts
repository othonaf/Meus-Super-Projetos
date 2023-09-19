import express, { response } from "express";
import cors from "cors";
import { Request, Response } from 'express';
import { v4 as generateId } from 'uuid';
import { todos } from "./data";
import * as fs from 'fs';

const app = express()
app.use(express.json())
app.use(cors())

// EXERCISE 01 and EXERCISE 02 on the file "data.ts"

/* EXERCISE 03
        Objective: Build an endpoint that returns the entire to-do array:
*/
app.get('/todos', (req: Request, res: Response) => {
    res.status(201).send(todos)
})

/* EXERCISE 04
        Objective: Build an endpoint that returns all tasks from the exercise 02 
        according to a single status, that is, returns either completed 
        tasks or only those that are still in progress:
*/
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

/* EXERCISE 05
        Objective: Build a to-do creation endpoint. 
        The response must return the updated to-do array.
*/
app.post('/create', (req: Request, res: Response) => {
    
    try {
        
        const taskTitle = req.body.title
        if(!taskTitle)
        throw new Error("You must enter a name for the new Task.");

        const newTask = {
            userId: generateId(),
            todo: [
                {
                    id: generateId(),
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

/* EXERCISE 06
        Objective: Build an endpoint for editing the 
        status of a to-do, that is, from complete to incomplete and vice versa.
*/
app.post('/editTask/:id', (req: Request, res: Response) => {

    try {
        const searchTask = req.body.title
        const Id = req.params.id
        const user = todos.find((user) => user.userId === Id)
          
        //Validating the Information.    
        if(!searchTask || !Id)
        throw new Error('Please, type an Task and an Id!')  
    
        // Searching a specific Task:
        const updatedTask:any = user?.todo.find(task => task.title === searchTask)
       // Changing the Task status:
        updatedTask.completed = !updatedTask.completed 
       
       res.status(201).send(updatedTask)

    } catch (error: any) {
        res.end(error.message);
    }
})

/* EXERCISE 07
        Objective: Build an endpoint that deletes a specific task according to its id.
*/
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

/* EXERCISE 08 
        Objective: Build an endpoint that returns all tasks for a given User Id.
*/
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

/* EXERCISE 09
        Objective: Build a to-do creation endpoint by User Id. 
*/
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
        
        res.status(201).send("New task added successfully!")
    
    } catch (error: any) {
        res.end(error.message);
    }
    
})

/* EXERCISE 10
      Objective: At the endpoint of exercise 8, model the return for the 
      following structure: an array with completed task objects and 
      another object with tasks to do.
*/
app.get('/selectandall', (req: Request, res: Response) => {
    
        try {
            
            const Id = req.query.id
            const selectedTask = todos.filter((todo) => todo.userId === Id)
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

/* EXERCISE 11
        Objective: Refactor the exercise 5 endpoint so that the added tasks 
        are actually stored in the exercise 3 array.
*/
app.post('/editOnTheSource', (req: Request, res: Response) => {
    
    try {
        const taskTitle = req.body.title
        
        // Function to Add a new todo to the array "todos" 
        function addToDo(newToDo:any) {
            // Loading the File data.ts
            const dataFilePath = '/Users/Othon/OneDrive/Área de Trabalho/Backend/Meus-Super-Projetos/Aprofundamento-Express/src/data.ts';
            const data = require(dataFilePath);
        
            // Adding the new todo to the array "todos"
            data.todos.push(newToDo);
        
            // Write the updated file back to disk
            fs.writeFileSync(dataFilePath, `export const todos = ${JSON.stringify(data.todos, null, 2)};`, 'utf-8');
        }
        
        const newToDo = {
            userId: generateId(),
            todo: [
              {
                "id": generateId(),
                "title": taskTitle,
                "completed": false
              },
              
            ]
          };
  
            addToDo(newToDo); 
            res.status(201).send(newToDo) 
           
    } catch (error) {
        res.status(404).end(error)
    }   
    
});



app.listen(3003, () => {
    console.log("Servidor Ok!")
})

//https://nodejs.dev/pt/learn/reading-files-with-nodejs