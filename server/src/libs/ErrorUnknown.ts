import { IResult } from '../common/IResult';

export function ErrorUnknown(err: unknown, statusCode: number): IResult {
  if (err instanceof Error) {
    return {
      success: false,
      code: statusCode,
      message: err.message,
    };
  } else {
    return {
      success: false,
      code: 500,
      message: 'Error Desconocido',
    };
  }
}
