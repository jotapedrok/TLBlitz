import { IServiceResponse } from "./IServiceResponse.interface";
import { IStatus } from "./IStatus.interface";

export interface IStatusService {
  getAllByBlockId(blockId: string): Promise<IServiceResponse>;
  delete(blockId: string, userId: string): Promise<IServiceResponse>;
  getAll(): Promise<IServiceResponse>;
  create(block: IStatus): Promise<IServiceResponse>;
}