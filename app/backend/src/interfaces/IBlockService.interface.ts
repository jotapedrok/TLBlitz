import { IServiceResponse } from "./IServiceResponse.interface";
import { IBlock } from "./IBlock.interface";

export interface editableFields {
  name?: string;
  password?: string;
}


export interface IBlockService {
  getAllByUserId(userId: string): Promise<IServiceResponse>;
  addUser(blockId: string, userId: string, access: string): Promise<IServiceResponse>;
  getAll(): Promise<IServiceResponse>;
  create(block: IBlock): Promise<IServiceResponse>;
  edit(id: string, payload: editableFields): Promise<IServiceResponse>;
}