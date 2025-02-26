import express from 'express';
import morgan from 'morgan';
import rutaUser from './routes/user.routes';
import rutaProduct from './routes/product.routes';
import rutaEmail from './routes/email.routes';
import rutaVerifyToken from './routes/verifytoken.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:4000',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', rutaUser);
app.use('/api', rutaProduct);
app.use('/api', rutaEmail);
app.use('/api/verifytoken', rutaVerifyToken);

export default app;
