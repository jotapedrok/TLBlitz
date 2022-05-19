import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { IStatus } from "../interfaces/IStatus.interface";
import { IModel } from "../interfaces/IModel.interface";
import { IStatusService } from "../interfaces/IStatusService.interface";

export class StatusService implements IStatusService {
  constructor(private statusModel: IModel, private blockModel: IModel) { }
  getAll = async (): Promise<IServiceResponse> => {
    const status = await this.statusModel.findAll({ limit: 3 });
    return { error: false, data: status };
  };

  getAllByBlockId = async (blockId: string): Promise<IServiceResponse> => {

  };

  create = async (block: IStatus): Promise<IServiceResponse> => {

  };

  delete = async (blockId: string, userId: string): Promise<IServiceResponse> => {

  };
}