import express from 'express';
import { Request, Response } from 'express';
import connection from "./connection";

const router = express.Router();

/*
    ENDPOINT PARA CRIAR UM REGISTRO:
*/
router.post('/Registro', async (req: Request, res: Response) => {
    const { nome, email, cpf, renda, telefone, data_criacao } = req.body;

    try {
        //Valida se os campos obrigatórios foram devidamente preenchidos:
        if (!nome || !email || !cpf || !renda || !data_criacao){
            return res.status(400).send("Por gentileza, preencher campos obrigatórios.");
        }

        // Verificar se o nome já existe no banco de dados:
        const nomeExists = await connection('registro').where('nome', nome).first();

        if (nomeExists) {
            return res.status(400).send("Nome já existe no banco de dados.");
        }

        // Verificar se o CPF já existe no banco de dados:
        const cpfExists = await connection('registro').where('cpf', cpf).first();

        if (cpfExists) {
            return res.status(400).send("CPF já existe no banco de dados.");
        }

        // Inserir no banco de dados se o nome e o CPF forem únicos;
        await connection('registro').insert({
            nome,
            email,
            cpf,
            renda,
            telefone,
            data_criacao
        });

        res.status(200).send("Inserção bem-sucedida.");
    } catch (error) {
        console.error("Erro ao inserir no banco de dados:", error);
        res.status(400).send("Não foi possível inserir no banco de dados.");
    }
});
export default router;