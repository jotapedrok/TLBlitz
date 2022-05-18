import { RequestHandler } from "express";
import { IUserService } from "../interfaces/IUserService.interface";
import { IAuthService } from "../interfaces/IAuthService.interface";

export default class UserController {
  constructor(private authService: IAuthService, private userService: IUserService) { }

  private setError(error: string): number {
    switch (error) {
      case 'User not found':
        return 404
      case 'Invalid Password':
      case 'Ivalid Token':
      case 'Token Expired':
        return 401
      case 'User already exist':
        return 409
      case 'Error on Update':
        return 400
      default:
        return 500
    }
  }

  login: RequestHandler = async (req, res, next) => {
    try {
      const response = await this.authService.authentication(req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(202).json(response.data);
    } catch (e) {
      next(e);
    }
  }

  getById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.userService.getById(id);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  }

  getAll: RequestHandler = async (_req, res, next) => {
    try {
      const response = await this.userService.getAll();
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  }

  create: RequestHandler = async (req, res, next) => {
    try {
      const response = await this.userService.create(req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(201).json(response.data);
    } catch (e) {
      next(e);
    }
  }

  edit: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.userService.edit(id, req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(202).json(response.data);
    } catch (e) {
      next(e);
    }
  }
}