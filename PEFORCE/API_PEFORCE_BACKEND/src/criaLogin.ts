import express from 'express';
import connection from "./connection";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';


const router = express.Router();

router.post('/login', async (req:Request, res:Response) => {
    const { username, password, profile } = req.body;
  
    try {
      // Verifica se o usuário já existe no banco de dados
      const userExistsResult = await connection.raw(`
            SELECT * FROM usuarios WHERE username = '${username}'
      `);
      
  
      if (userExistsResult.rows.length > 0) {
        return res.status(409).json({ message: 'Usuário já existe' });
      }
  
      // Gere um salt aleatório
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
  
      // Crie o hash da senha com o salt
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Insira o usuário no banco de dados com a senha com hash e sal
       await connection.raw(`
            INSERT INTO usuarios (username, password, profile)
            VALUES (
                '${username}',
                '${hashedPassword}',
                '${profile}'
            )
      `)
      
  
        res.json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  });

  export default router;