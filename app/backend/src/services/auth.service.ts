import { config } from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { IModel } from "../interfaces/IModel.interface";
import { IAuthService } from "../interfaces/IAuthService.interface";
import { IUser } from "../interfaces/IUser.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";

config();

export class AuthService implements IAuthService {
  constructor(private userModel: IModel) { }

  private jwtKey: string = process.env.JWT_KEY || '';

  private genToken(payload: IUser): string {
    const configs: jwt.SignOptions = {
      algorithm: 'RS256',
      expiresIn: '3h',
    }
    const { password, ...user } = payload;
    const token = jwt.sign({ data: user }, this.jwtKey, configs);
    return token;
  }

  async authentication(payload: IUser): Promise<IServiceResponse> {
    const { email, password } = payload;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      return { error: 'User not found' };
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return { error: 'Invalid Password' };
    }
    return { error: false, data: { token: this.genToken(payload) } };
  }

  async authorization(token: string): Promise<IServiceResponse> {
    try {
      const payload = jwt.verify(token, this.jwtKey);
      return { error: false, data: payload }
    } catch (e: any) {
      if (e.name === 'TokenExpiredError') {
        return { error: 'Token Expired' }
      }
      return { error: 'Invalid Token' };
    }
  }
}