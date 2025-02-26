import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export interface IPayload {
  id: string;
  email: string;
  role: string;
}

export function GenerateToken(payload: IPayload): string | null {
  try {
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' });
    console.log('token generate:', token);
    return token;
  } catch (error) {
    console.error('GenerateToken error:', error);
    return null;
  }
}
