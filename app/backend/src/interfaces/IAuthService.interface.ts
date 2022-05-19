import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface IAuthService {
  authentication(payload: IUser): Promise<IServiceResponse>;
  authorization(token: string): IServiceResponse;
}
