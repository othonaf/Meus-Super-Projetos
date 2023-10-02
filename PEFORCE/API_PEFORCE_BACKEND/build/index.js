"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const app_1 = __importDefault(require("./app"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checaPerfil_1 = __importDefault(require("./checaPerfil"));
app_1.default.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, profile } = req.body;
    try {
        const userExistsResult = yield connection_1.default.raw(`
            SELECT * FROM usuarios WHERE username = '${username}'
      `);
        if (userExistsResult.rows.length > 0) {
            return res.status(409).json({ message: 'Usuário já existe' });
        }
        const saltRounds = 10;
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        yield connection_1.default.raw(`
            INSERT INTO usuarios (username, password, profile)
            VALUES (
                '${username}',
                '${hashedPassword}',
                '${profile}'
            )
      `);
        res.json({ message: 'Usuário registrado com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
}));
app_1.default.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM usuarios WHERE username = '${username}'
          `);
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        const user = result.rows[0];
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }
        const token = jsonwebtoken_1.default.sign({ username: user.username, profile: user.profile }, 'f1#z8.sqt', {
            expiresIn: '2h', algorithm: 'HS256'
        });
        console.log(token);
        res.json({ token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
}));
app_1.default.get('/recebeRegistro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, connection_1.default)("registro").select();
        res.status(200).send(result);
    }
    catch (error) {
        res.status(400).send("Sem acesso ao servidor.");
    }
}));
app_1.default.post('/inserirRegistro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, cpf, renda, telefone, data_criacao } = req.body;
    try {
        if (!nome || !email || !cpf || !renda || !data_criacao) {
            return res.status(400).send("Por gentileza, preencher campos obrigatórios.");
        }
        const nomeExists = yield (0, connection_1.default)('registro').where('nome', nome).first();
        if (nomeExists) {
            return res.status(400).send("Nome já existe no banco de dados.");
        }
        const cpfExists = yield (0, connection_1.default)('registro').where('cpf', cpf).first();
        if (cpfExists) {
            return res.status(400).send("CPF já existe no banco de dados.");
        }
        yield (0, connection_1.default)('registro').insert({
            nome,
            email,
            cpf,
            renda,
            telefone,
            data_criacao
        });
        res.status(200).send("Inserção bem-sucedida.");
    }
    catch (error) {
        console.error("Erro ao inserir no banco de dados:", error);
        res.status(400).send("Não foi possível inserir no banco de dados.");
    }
}));
app_1.default.delete('/registro/:id', (0, checaPerfil_1.default)('admin'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield (0, connection_1.default)("registro")
            .delete()
            .where({
            id: id
        });
        res.send("Registro deletado com sucesso!");
    }
    catch (e) {
        console.error(e);
        return res.status(401).send("Usuário sem permissão.");
    }
}));
//# sourceMappingURL=index.js.map