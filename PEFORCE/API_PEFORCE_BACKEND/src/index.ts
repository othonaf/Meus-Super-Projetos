import app from "./app";
import criaLogin from './criaLogin';
import login from './login';
import verRegistros from './verRegistros';
import criaRegistro from './criaRegistros';
import deletaRegistro from './delete';


/*
    ROTA PARA O ENDPOINT DE CRIAR LOGIN (USUÁRIO):
*/
app.use('/cria', criaLogin)

/*
    ROTA PARA O ENDPOINT DE LOGIN:
*/
app.use('/efetua', login)

/*
    ROTA PARA O ENDPOINT PARA VISUALIZAR TODOS OS REGISTROS:
*/
app.use('/visualiza', verRegistros)

/*
    ROTA PARA O ENDPOINT PARA CRIAR UM REGISTRO:
*/
app.use('/inserir', criaRegistro)

/*
    ROTA PARA O ENDPOINT PARA DELETAR UM REGISTRO:
*/
app.use('/delete', deletaRegistro);