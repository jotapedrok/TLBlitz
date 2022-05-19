import { IServiceResponse } from "./IServiceResponse.interface";
import { IStatus } from "./IStatus.interface";

export interface IStatusService {
  getAllByBlockId(blockId: string): Promise<IServiceResponse>;
  delete(statusId: string): Promise<IServiceResponse>;
  getAll(): Promise<IServiceResponse>;
  create(status: IStatus): Promise<IServiceResponse>;
}