import { RequestHandler } from "express";
import { IStatusService } from "../interfaces/IStatusService.interface";

export class StatusController {
  constructor(private statusService: IStatusService) { };

  private setError(error: string): number {
    switch (error) {
      default:
        return 500
    }
  };

  getAll: RequestHandler = async (_req, res, next) => {
    try {
      const response = await this.statusService.getAll();
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
      const response = await this.statusService.getAllByBlockId(blockId);
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
      const response = await this.statusService.create(req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(201).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.statusService.delete(id);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(204).json(response.data);
    } catch (e) {
      next(e);
    }
  };
}