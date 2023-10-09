import express from 'express';
import connection from "./connection";
import { Request, Response } from 'express';


const router = express.Router();

router.get('/Registros', async (req: Request, res: Response) => {
    try {
         const result = await connection("registro").select();
        
        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(400).send("Sem acesso ao servidor.")
    }
})

export default router;