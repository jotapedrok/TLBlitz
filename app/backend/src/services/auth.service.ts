import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { IModel } from "../interfaces/IModel.interface";
import { IAuthService } from "../interfaces/IAuthService.interface";
import { IUser } from "../interfaces/IUser.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IPayloadJwt } from '../interfaces/IPayloadJwt.interface';

export class AuthService implements IAuthService {
  private jwtKey: string;
  constructor(private userModel: IModel) {
    this.jwtKey = process.env.JWT_KEY || 'any_key';
  }

  private genToken(payload: IUser): string | any {
    const configs: jwt.SignOptions = {
      algorithm: 'HS256',
      expiresIn: '3h',
    }
    const { password, ...user } = payload;
    const token = jwt.sign({ user }, this.jwtKey, configs);
    return token;
  }

  async authentication(payload: IUser): Promise<IServiceResponse> {
    const { email, password } = payload;
    const user = await this.userModel.findOne({ where: { email }, raw: true });
    if (!user) {
      return { error: 'User not found' };
    }
    if (!bcrypt.compare(password, user.password)) {
      return { error: 'Invalid Password' };
    }
    return { error: false, data: { token: this.genToken(user) } };
  }

  authorization(token: string): IServiceResponse {
    try {
      const payload = jwt.verify(token, this.jwtKey) as IPayloadJwt;
      return { error: false, data: payload.user }
    } catch (e: any) {
      if (e.name === 'TokenExpiredError') {
        return { error: 'Token Expired' }
      }
      return { error: 'Invalid Token' };
    }
  }
}