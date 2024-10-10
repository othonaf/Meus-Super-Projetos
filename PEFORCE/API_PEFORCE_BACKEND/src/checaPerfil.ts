import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const checkProfile = (profileRequired: string) => (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string; 
  const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_Secret não definido');
      
    }

  let decoded: JwtPayload | string;
  try {
    decoded = jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  if (typeof decoded === 'string') {
    // Se 'decoded' for uma string, algo deu errado
    return res.status(401).json({ message: 'Token inválido' });
  }

  // Agora TypeScript sabe que 'decoded' é do tipo JwtPayload
  if (decoded.profile === profileRequired) {
    next(); // Perfil corresponde, permita a ação
  } else {
    res.status(403).json({ message: 'Acesso proibido' });
  }
};

export default checkProfile;
