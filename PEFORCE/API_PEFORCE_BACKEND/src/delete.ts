import express from 'express';
import connection from "./connection";
import { Request, Response } from 'express';
import checkProfile from "./checaPerfil";

const router = express.Router();
/*
    ENDPOINT PARA DELETAR UM REGISTRO:
*/
router.delete('/registro/:id', checkProfile('admin'), async (req: Request, res: Response) => {
    const id = req.params.id
    
    try {
            await connection("registro")
            .delete()
            .where({
                id: id
            });
        res.send("Registro deletado com sucesso!");
        
    } catch (e) {
        console.error(e);
        return res.status(401).send("Usuário sem permissão.");
    }
});

export default router;