import { Request, Response, Router } from 'express';
import email from '../controllers/email.controller';
import { ErrorUnknown } from '../libs/ErrorUnknown';

const router = Router();

router.post('/email', async (req: Request, res: Response) => {
  try {
    const response = await email.sendEmail(req.body.email);
    console.log('body: ', req.body);
    res.status(response.code).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

export default router;
