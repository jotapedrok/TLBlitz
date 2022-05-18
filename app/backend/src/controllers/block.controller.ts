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
      return res.status(202).json(response.data);
    } catch (e) {
      next(e);
    }
  };
}