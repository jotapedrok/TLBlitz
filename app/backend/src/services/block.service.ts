import { IModel } from "../interfaces/IModel.interface";
import { IBlockService } from "../interfaces/IBlockService.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";

export class BlockService implements IBlockService {
  constructor(private blockModel: IModel) { }

  async getAllByUserId(userId: string): Promise<IServiceResponse> {
    const blocks = this.blockModel.findOne({ where: { createdBy: userId }, raw: true });
    if (!blocks) {
      return { error: 'No one block was found', data: [] };
    }
    return { error: false, data: blocks };
  };

  async getAll(): Promise<IServiceResponse> {
    const blocks = this.blockModel.findAll();
    return { error: false, data: blocks };
  }
}
