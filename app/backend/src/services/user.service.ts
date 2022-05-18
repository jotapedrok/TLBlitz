import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IModel } from "../interfaces/IModel.interface";
import { IUserService } from "../interfaces/IUserService.interface";
import { IUser } from "../interfaces/IUser.interface";

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

  async create(user: IUser): Promise<IServiceResponse> {
    const found = await this.userModel.findOne({ where: { email: user.email } });
    if (found) return { error: 'User already exist' };
    const created = await this.userModel.create({ ...user }, { raw: true });
    const { password, ...userWithoutPass } = user;
    return { error: false, data: { id: created.id, ...userWithoutPass } };
  }
}