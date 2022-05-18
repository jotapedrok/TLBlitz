import { IModel } from "../interfaces/IModel.interface";
import { editableFields, IBlockService } from "../interfaces/IBlockService.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IBlock } from "../interfaces/IBlock.interface";

export class BlockService implements IBlockService {
  constructor(private blockModel: IModel, private userModel: IModel, private usersBlocksModel: IModel) { }

  async getAllByUserId(userId: string): Promise<IServiceResponse> {
    const user = await this.userModel.findByPk(userId);
    if (!user) return { error: 'User not found' };
    const blocks = await this.blockModel.findOne({ where: { createdBy: userId }, raw: true });
    if (!blocks) return { error: 'No one block was found', data: [] };
    return { error: false, data: blocks };
  };

  async getAll(): Promise<IServiceResponse> {
    const blocks = await this.blockModel.findAll();
    return { error: false, data: blocks };
  };

  async create(block: IBlock): Promise<IServiceResponse> {
    const created = await this.blockModel.create({ ...block });
    const associate = { userId: block.createdBy, blockId: created.id, access: 'owner' };
    await this.usersBlocksModel.create(associate);
    return { error: false, data: { id: created.id, ...block } };
  };

  async addUser(blockId: string, userId: string): Promise<IServiceResponse> {
    const block = await this.blockModel.findByPk(blockId);
    if (!block) return { error: 'Block not found' };
    const user = await this.userModel.findByPk(userId);
    if (!user) return { error: 'User not found' };
    block.addUser(userId);
    return { error: false, data: block };
  };

  async edit(id: string, payload: editableFields): Promise<IServiceResponse> {
    const found = await this.blockModel.findByPk(id);
    if (!found) return { error: 'Block not found' };
    const response = await this.blockModel.update({ ...payload }, { where: { id } });
    if (!response[0]) return { error: 'Error on Update' }
    return { error: false, data: { id } };
  }
}
