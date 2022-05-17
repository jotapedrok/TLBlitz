import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface ILoginService {
  genToken(payload: IUser): string;
  authorization(payload: IUser): IServiceResponse;
  authentification(token: string): IServiceResponse;
}
