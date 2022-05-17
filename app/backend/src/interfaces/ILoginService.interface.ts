import { IModel } from "./IModel.interface";
import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface ILoginService {
  userModel: IModel;
  genToken(payload: IUser): string;
  authentication(payload: IUser): IServiceResponse;
  authorization(token: string): IServiceResponse;
}
