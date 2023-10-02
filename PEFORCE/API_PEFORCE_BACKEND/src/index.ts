import connection from "./connection";
import app from "./app";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import checkProfile from "./checaPerfil";

/*
    ENDPOINT DE CRIAR LOGIN (USUÁRIO):
*/
app.post('/register', async (req, res) => {
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



/*
    ENDPOINT DE LOGIN:
*/
app.post('/login', async (req:Request, res:Response) => {
    const { username, password } = req.body;
  
    try {
          const result = await connection.raw(`
            SELECT * FROM usuarios WHERE username = '${username}'
          `)          
        
      console.log(result)    
      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }
  
      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }
  
      const token = jwt.sign({ username: user.username, profile: user.profile }, 'f1#z8.sqt', {
        expiresIn: '2h', algorithm: 'HS256'
      });
      console.log(token)
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  });




/*
    ENDPOINT PARA VISUALIZAR TODOS OS REGISTROS:
*/
app.get('/recebeRegistro', async (req: Request, res: Response) => {
    try {
         const result = await connection("registro").select();
        
        res.status(200).send(result)
        
    } catch (error:any) {
        res.status(400).send("Sem acesso ao servidor.")
    }
})

/*
    ENDPOINT PARA CRIAR UM REGISTRO:
*/
app.post('/inserirRegistro', async (req: Request, res: Response) => {
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

/*
    ENDPOINT PARA DELETAR UM REGISTRO:
*/
app.delete('/registro/:id', checkProfile('admin'), async (req: Request, res: Response) => {
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