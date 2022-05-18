import { IServiceResponse } from "./IServiceResponse.interface";
import { IUser } from "./IUser.interface";

export interface editableFields {
  id?: string;
  username?: string;
  role?: string;
  email?: string;
  password?: string;
}

export interface IUserService {
  getById(id: string): Promise<IServiceResponse>;
  getAll(): Promise<IServiceResponse>;
  create(user: IUser): Promise<IServiceResponse>;
  edit(id: string, payload: editableFields): Promise<IServiceResponse>;
}