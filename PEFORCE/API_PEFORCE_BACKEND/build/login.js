"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkProfile = (profileRequired) => (req, res, next) => {
    const token = req.headers.authorization;
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, 'seu_segredo');
    }
    catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    if (typeof decoded === 'string') {
        return res.status(401).json({ message: 'Token inválido' });
    }
    if (decoded.profile === profileRequired) {
        next();
    }
    else {
        res.status(403).json({ message: 'Acesso proibido' });
    }
};
exports.default = checkProfile;
//# sourceMappingURL=login.js.map