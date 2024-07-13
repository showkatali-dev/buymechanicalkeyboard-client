export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message?: string;
  token?: string;
  data: T;
}
