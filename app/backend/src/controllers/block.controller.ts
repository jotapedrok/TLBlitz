import { RequestHandler } from "express";
import { editableFields, IBlockService } from "../interfaces/IBlockService.interface";

export class BlockController {
  constructor(private blockService: IBlockService) { }

  private setError(error: string): number {
    switch (error) {
      default:
        return 500
    }
  }

  getAllByUserId: RequestHandler = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const response = await this.blockService.getAllByUserId(userId);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(200).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  getAll: RequestHandler = async (_req, res, next) => {
    try {
      const response = await this.blockService.getAll();
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
      const response = await this.blockService.create(req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(201).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  addUser: RequestHandler = async (req, res, next) => {
    try {
      const { blockId, userId } = req.params;
      const { access } = req.body;
      const response = await this.blockService.addUser(blockId, userId, access);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(202).json(response.data);
    } catch (e) {
      next(e);
    }
  };

  edit: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.blockService.edit(id, req.body);
      if (response.error) {
        const errorCode = this.setError(response.error);
        return res.status(errorCode).json({ error: response.error });
      }
      return res.status(202).json(response.data);
    } catch (e) {
      next(e);
    }
  };
}