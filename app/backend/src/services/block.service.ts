import { IModel } from "../interfaces/IModel.interface";
import { editableFields, IBlockService } from "../interfaces/IBlockService.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IBlock } from "../interfaces/IBlock.interface";

export class BlockService implements IBlockService {
  constructor(private blockModel: IModel, private userModel: IModel, private usersBlocksModel: IModel) { }

  async getAllByUserId(userId: string): Promise<IServiceResponse> {
    const user = await this.userModel.findOne({
      include: {
        model: this.blockModel,
        as: 'blocks',
        through: { attributes: [] },
      },
      where: { id: userId },
    });
    if (!user) return { error: 'User not found' };
    const blocks = user.blocks;
    if (!blocks) return { error: 'No one block was found', data: [] };
    return { error: false, data: blocks };
  };

  async getAll(): Promise<IServiceResponse> {
    const blocks = await this.blockModel.findAll({
      include: {
        model: this.userModel,
        as: 'participants',
        through: { attributes: [] },
        attributes: ['id', 'username'],
      }
    });
    return { error: false, data: blocks };
  };

  async create(block: IBlock): Promise<IServiceResponse> {
    const created = await this.blockModel.create({ ...block });
    const associate = { userId: block.createdBy, blockId: created.id, access: 'owner' };
    await this.usersBlocksModel.create(associate);
    return { error: false, data: { id: created.id, ...block } };
  };

  async addUser(blockId: string, userId: string, access: string): Promise<IServiceResponse> {
    const block = await this.blockModel.findByPk(blockId);
    if (!block) return { error: 'Block not found' };
    const user = await this.userModel.findByPk(userId);
    if (!user) return { error: 'User not found' };
    const [_O, created] = await this.usersBlocksModel.findOrCreate({
      where: {
        userId,
        blockId,
        access,
      }
    });
    let message;
    if (created) {
      message = `User ${user.username} is added as ${access}`
    } else {
      message = `User ${user.username} already exists in block`
    }
    return {
      error: false,
      data: { message },
    };
  };

  async editUser(blockId: string, userId: string, access: string): Promise<IServiceResponse> {
    const block = await this.blockModel.findByPk(blockId);
    if (!block) return { error: 'Block not found' };
    const user = await this.userModel.findByPk(userId);
    if (!user) return { error: 'User not found' };
    await this.usersBlocksModel.update({ access }, {
      where: {
        userId,
        blockId,
      }
    });
    return {
      error: false,
      data: { message: `User ${user.username} is chaged as ${access}` },
    };
  };

  async deleteUser(blockId: string, userId: string): Promise<IServiceResponse> {
    const block = await this.blockModel.findByPk(blockId);
    if (!block) return { error: 'Block not found' };
    const user = await this.userModel.findByPk(userId);
    if (!user) return { error: 'User not found' };
    await this.usersBlocksModel.update({ deleted: true, deletedAt: Date.now() }, {
      where: {
        userId,
        blockId,
      }
    });
    return {
      error: false,
      data: { message: `User ${user.username} was deleted from ${block.name}` },
    };
  };

  async edit(id: string, payload: editableFields): Promise<IServiceResponse> {
    const found = await this.blockModel.findByPk(id);
    if (!found) return { error: 'Block not found' };
    const response = await this.blockModel.update({ ...payload }, { where: { id } });
    if (!response[0]) return { error: 'Error on Update' }
    return { error: false, data: { id } };
  };
}
