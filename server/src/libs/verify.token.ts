import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config/config';
import { Request } from 'express';
import { IResult } from '../common/IResult';

interface AuthRequest extends Request {
  user?: string | JwtPayload;
}

export function VerifyToken(req: AuthRequest): IResult {
  const { token } = req.cookies;

  if (!token) {
    return {
      success: false,
      code: 401,
      message: 'No autorizado',
    };
  }

  const decoded = jwt.verify(token, config.JWT_SECRET);
  req.user = decoded;

  return {
    success: true,
    code: 200,
    message: 'Autorizado',
  };
}
