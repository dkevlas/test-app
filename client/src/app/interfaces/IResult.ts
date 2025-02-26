export interface IDataUser {
  email: string;
  name: string;
  role: string;
}

export interface IResult<T> {
    success: boolean;
    code: number;
    message: string;
    data?: T;
    path?: string;
  }
  