import mongoose from 'mongoose';
import { config } from '../config/config';

export async function ConnectDB(): Promise<void> {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('DB is connected');
  } catch (error) {
    console.error('DB connect failed:', error);
  }
}
