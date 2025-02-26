import { Response, Request, Router } from 'express';
import { ErrorUnknown } from '../libs/ErrorUnknown';
import productModel from '../model/product.model';
import { IResult } from '../common/IResult';

const router = Router();

router.get('/products', async (_req: Request, res: Response) => {
  try {
    const products = await productModel.find();
    const response: IResult = {
      success: true,
      code: 200,
      message: 'Products found',
      data: products,
    };
    res.status(200).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

router.get('/products/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      const response: IResult = {
        success: false,
        code: 404,
        message: 'Product not found',
      };
      res.status(404).json(response);
      return;
    }
    const response: IResult = {
      success: true,
      code: 200,
      message: 'Product found',
      data: product,
    };
    res.status(200).json(response);
  } catch (err: unknown) {
    const error = ErrorUnknown(err, 500);
    res.status(error.code).json(error);
  }
});

export default router;
