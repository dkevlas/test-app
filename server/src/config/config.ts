import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: parseInt(process.env.PORT || '3010', 10),
  HOST: process.env.HOST || 'localhost',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/auth',
  JWT_SECRET: process.env.JWT_SECRET || 'secret-incorrecta',
  COOKIE_NAME: process.env.COOKIE_NAME || 'cookie-name',
};
