import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IModel } from "../interfaces/IModel.interface";
import { IUserService } from "../interfaces/IUserService.interface";

export class UserService implements IUserService {
  constructor(private userModel: IModel) { }

  async getById(id: string): Promise<IServiceResponse> {
    const user = await this.userModel.findByPk(id, { raw: true });
    if (!user) {
      return { error: 'User not found' };
    }
    return { error: false, data: user };
  }

  async getAll(): Promise<IServiceResponse> {
    const users = await this.userModel.findAll({ raw: true });
    return { error: false, data: users };
  }
}