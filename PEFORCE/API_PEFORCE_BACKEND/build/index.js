"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const criaLogin_1 = __importDefault(require("./criaLogin"));
const login_1 = __importDefault(require("./login"));
const criaRegistros_1 = __importDefault(require("./criaRegistros"));
const delete_1 = __importDefault(require("./delete"));
const verRegistros_1 = __importDefault(require("./verRegistros"));
app_1.default.use('/cria', criaLogin_1.default);
app_1.default.use('/efetua', login_1.default);
app_1.default.use('/visualiza', verRegistros_1.default);
app_1.default.use('/inserir', criaRegistros_1.default);
app_1.default.use('/delete', delete_1.default);
//# sourceMappingURL=index.js.map