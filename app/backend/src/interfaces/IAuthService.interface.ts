import { IModel } from "./IModel.interface";
import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface IAuthService {
  authentication(payload: IUser): IServiceResponse;
  authorization(token: string): IServiceResponse;
}
