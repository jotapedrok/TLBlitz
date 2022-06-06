import * as bcrypt from 'bcryptjs';
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IModel } from "../interfaces/IModel.interface";
import { editableFields, IUserService } from "../interfaces/IUserService.interface";
import { IUser } from "../interfaces/IUser.interface";

export class UserService implements IUserService {
  constructor(private userModel: IModel) { }

  async getById(id: string): Promise<IServiceResponse> {
    const user = await this.userModel.findByPk(id, { raw: true });
    if (!user) return { error: 'User not found' };
    return { error: false, data: user };
  }

  async getAll(): Promise<IServiceResponse> {
    const users = await this.userModel.findAll({ raw: true });
    return { error: false, data: users };
  }

  async create(user: IUser): Promise<IServiceResponse> {
    const foundEmail = await this.userModel.findOne({ where: { email: user.email } });
    console.log('foundEmail', foundEmail);
    if (foundEmail) return { error: 'Email already exist' };
    const foundUsername = await this.userModel.findOne({ where: { email: user.username } });
    if (foundUsername) return { error: 'Username already exist' };
    const { password, ...userWithoutPass } = user;
    const hash = bcrypt.hashSync(password, 14);
    const created = await this.userModel.create(
      { ...userWithoutPass, password: hash },
      { raw: true },
    );
    return { error: false, data: { id: created.id, ...userWithoutPass } };
  }

  async edit(id: string, payload: editableFields): Promise<IServiceResponse> {
    const found = await this.userModel.findByPk(id, { raw: true });
    if (!found) return { error: 'User not found' };
    const response = await this.userModel.update({ ...payload }, { where: { id } });
    if (!response[0]) return { error: 'Error on Update' }
    return { error: false, data: { id } };
  }
}