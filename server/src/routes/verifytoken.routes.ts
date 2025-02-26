import { Request, Response, Router } from 'express';
import { VerifyToken } from '../libs/verify.token';
import { ErrorUnknown } from '../libs/ErrorUnknown';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const response = VerifyToken(req);
    res.status(response.code).json({
      success: response.success,
      code: response.code,
      message: response.message,
    });
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

export default router;
