import { Request, Response, Router } from 'express';
import auth from '../controllers/user.controller';
import { ErrorUnknown } from '../libs/ErrorUnknown';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    const response = await auth.login(req.body, res);
    res.status(response.code).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

router.post('/register', async (req: Request, res: Response) => {
  try {
    const response = await auth.register(req.body);
    res.status(response.code).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

router.post('/logout', async (_req: Request, res: Response) => {
  try {
    const response = await auth.logout(res);
    res.status(response.code).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

export default router;
