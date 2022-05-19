import { RequestHandler } from "express";
import { ITaskService } from "../interfaces/ITaskService.interface";

export class TaskController {
  constructor(private taskService: ITaskService) { };

  private setError(error: string): number {
    switch (error) {
      default:
        return 500
    }
  };

  getAll: RequestHandler = async (_req, res, next) => {
    try {
      const response = await this.taskService.getAll();
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  getAllByUserId: RequestHandler = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const response = await this.taskService.getAllByUserId(userId);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  getAllByBlockId: RequestHandler = async (req, res, next) => {
    try {
      const { blockId } = req.params;
      const response = await this.taskService.getAllByUserId(blockId);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  create: RequestHandler = async (req, res, next) => {
    try {
      const response = await this.taskService.create(req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(201).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  edit: RequestHandler = async (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  changeStatus: RequestHandler = async (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };
}