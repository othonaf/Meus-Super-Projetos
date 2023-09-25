import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { users } from "./data";

const app = express()
app.use(express.json())
app.use(cors())

/* EXERCISE 01
    Let's start by making an endpoint that fetches all users from a list. The list is available in the "data.ts" file. 
*/
app.get('/AllUsers', (req: Request, res: Response) => {
    res.status(200).send(users)
})

/* EXERCISE 02
    Now, let's create a new endpoint, which searches for all users who have a specific type property, receiving only one type at a time. After that, answer:
    A) How did you pass the type parameters to the request? Why?
    b) Can you think of a way to ensure that only valid `types` are used?
*/
app.get('/SearchByType/:type', (req: Request, res: Response) =>{
    const type = req.params.type.toUpperCase()
  
    if(type != "ADMIN" && type != "NORMAL"){
        throw new Error('You must to type a valid type (NORMAL or ADMIN).')
    }
    try {
        const oneType = users.filter(u => u.type === type)

        res.status(200).send(oneType)
    } catch (error:any) {
        res.status(404).send(error)
    }
})


/* EXERCISE 03
    Let's now practice using more variable searches. Now create a search endpoint that finds a user searching ****by **name**.
A. What type of parameter sending is usually used here?*
B. Change this endpoint so that it returns an error message if no users were found.
*/
app.get('/SearchByName', (req: Request, res: Response) => {
    const name = req.query.name
    if(!name){
        throw new Error("You must to Type a name.")
    }
    try {
        const userFind = users.find(u => u.name === name)
        if (!userFind) {
            res.status(404).send("Name not found.")
        }
        else {
            res.status(200).send(userFind)
        }
        
    } catch (error:any) {
        res.status(404).send("Data not found.")
    }
})













app.listen(3003, ()=> {
    console.log('Server is out of control!')
})