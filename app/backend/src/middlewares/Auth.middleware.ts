import { RequestHandler } from "express";
import { IAuthService } from "../interfaces/IAuthService.interface";

export class Auth {
  constructor(private role: string, private authService: IAuthService) { };
  index: RequestHandler = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Authorization token is required' });
      }
      const response = this.authService.authorization(authorization);
      if (response.error) {
        return res.status(401).json({ error: response.error });
      }
      const { userRole } = response.data;
      if (userRole !== this.role) {
        return res.status(401).json({ error: 'User unauthorized' });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  }
}