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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./connection"));
const router = express_1.default.Router();
router.post('/Registro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.default = router;
//# sourceMappingURL=criaRegistros.js.map