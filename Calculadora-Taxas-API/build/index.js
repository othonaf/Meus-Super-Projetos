"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.post('/calculadora', (req, res) => {
    try {
        const { qtde, valor } = req.body;
        let valor_parcela;
        // Verificar se qtde e valor são números
        if (typeof qtde !== 'number' || typeof valor !== 'number') {
            return res.status(400).send('Os campos Quantidade e Valor devem ser do tipo número.');
        }
        switch (qtde) {
            case 2:
                valor_parcela = 4.59;
                break;
            case 3:
                valor_parcela = 5.97;
                break;
            case 4:
                valor_parcela = 7.33;
                break;
            case 5:
                valor_parcela = 8.66;
                break;
            case 6:
                valor_parcela = 9.96;
                break;
            case 7:
                valor_parcela = 11.24;
                break;
            case 8:
                valor_parcela = 12.50;
                break;
            case 9:
                valor_parcela = 13.73;
                break;
            case 10:
                valor_parcela = 14.93;
                break;
            case 11:
                valor_parcela = 16.12;
                break;
            case 12:
                valor_parcela = 17.28;
                break;
            default:
                valor_parcela = 0;
                break;
        }
        const valor_divisor = (100 - (valor_parcela + 5.31)) / 100;
        const valor_final = (valor / valor_divisor).toFixed(2);
        console.log(valor_parcela);
        console.log(valor_divisor);
        console.log(valor);
        res.status(200).send(`O valor a ser cobrado no cartão é ${valor_final}`);
    }
    catch (error) {
        res.status(500).send("Erro no servidor.");
    }
});
