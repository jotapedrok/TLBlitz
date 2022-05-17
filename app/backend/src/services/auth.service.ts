import { config } from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { IModel } from "../interfaces/IModel.interface";
import { IAuthService } from "../interfaces/IAuthService.interface";
import { IUser } from "../interfaces/IUser.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";

config();

export class AuthService implements IAuthService {
  constructor(private userModel: IModel) { }

  private key: string = process.env.JWT_KEY || '';

  private genToken(payload: IUser): string {
    const configs: jwt.SignOptions = {
      algorithm: 'RS256',
      expiresIn: '3h',
    }
    const { password, ...user } = payload;
    const token = jwt.sign({ data: user }, this.key, configs);
    return token;
  }

  authentication(payload: IUser): IServiceResponse {

  }

  authorization(token: string): IServiceResponse {

  }
}