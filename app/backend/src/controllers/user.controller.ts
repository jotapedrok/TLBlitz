import { RequestHandler } from "express";
import { IAuthService } from "../interfaces/IAuthService.interface";

export default class UserController {
  constructor(private loginService: IAuthService) { }

  private setError = (error: string): number => {
    switch (error) {
      case 'User not found':
        return 404
      case 'Invalid Password':
        return 401
      default:
        return 500
    }
  }

  login: RequestHandler = async (req, res, next) => {
    const response = await this.loginService.authentication(req.body);
    if (response.error) {
      const errorCode: number = this.setError(response.error);
      return res.status(errorCode).json({ error: response.error });
    }
    return res.status(202).json(response.data);
  }
}