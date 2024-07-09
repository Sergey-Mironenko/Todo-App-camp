import { Response, Request, NextFunction } from 'express';
import JWTService from '../services/jwt.service';


export class AuthMiddlewares {
  constructor(private jwtService: JWTService) {}

  async authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization'] || '';
    const [, token] = authorization.split(' ');
    
    if (!authorization || !token) {
      res.json({ message: 'Unauthorized' }).status(401);

      return;
    }
  
    const userData = this.jwtService.verifyAccess(token);

    if (!userData) {
      res.json({ message: 'Unauthorized' }).status(401);

      return;
    }
  
    next();
  };
};

const authMiddlewares = new AuthMiddlewares(new JWTService);
export default authMiddlewares;
