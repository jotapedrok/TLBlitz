import { Request, RequestHandler } from "express";
import { IAuthService } from "../interfaces/IAuthService.interface";

export class Auth {
  constructor(private role: string, private authService: IAuthService) { };
  index: RequestHandler = (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Authorization token is required' });
      }
      const response = this.authService.authorization(authorization);
      if (response.error) {
        return res.status(401).json({ error: response.error });
      }
      const { role } = response.data;
      if (role !== this.role && role !== 'admin') {
        console.log('here');
        return res.status(401).json({ error: 'User unauthorized' });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  testId: RequestHandler = (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const { id, userId } = req.params;
      if (authorization) {
        const response = this.authService.authorization(authorization);
        const { id: tokenId, role } = response.data;
        if (role !== 'admin') {
          if (id && id !== tokenId) {
            return res.status(401).json({ error: 'User unauthorized' });
          }
          if (userId && userId !== tokenId) {
            return res.status(401).json({ error: 'User unauthorized' });
          }
        }
        next();
      }
    } catch (e) {
      next(e)
    }
  };

  testBlock: RequestHandler = (req, res, next) => { }
}