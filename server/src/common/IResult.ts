export interface IResult {
  success: boolean;
  code: number;
  message: string;
  data?: object;
  path?: string;
}
