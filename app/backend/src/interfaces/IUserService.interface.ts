import { IServiceResponse } from "./IServiceResponse.interface";

export interface IUserService {
  getById(id: string): Promise<IServiceResponse>
}