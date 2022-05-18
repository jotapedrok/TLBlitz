import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface IUserService {
  getById(id: string): Promise<IServiceResponse>;
  getAll(): Promise<IServiceResponse>;
  create(user: IUser): Promise<IServiceResponse>;
}