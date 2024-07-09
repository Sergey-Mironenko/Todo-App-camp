import { UserType } from '../types/user.type';
import jwt from 'jsonwebtoken';

export default class JWTService {
  constructor() {}

  public sign = (user: UserType) => ({
    accessToken: jwt.sign(user, 'key_access', { expiresIn: '3600s' }),
  });

  verifyAccess = (token: string) => {
    try {
      return jwt.verify(token, 'key_access')
    } catch (e) {
      return null;
    }
  };
}