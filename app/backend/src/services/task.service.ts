import { IModel } from "../interfaces/IModel.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { ITask } from "../interfaces/ITask.interface";
import { editableFields, ITaskService } from "../interfaces/ITaskService.interface";

export class TaskService implements ITaskService {
  constructor(private taskModel: IModel) { }
  getAll = async (): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
  getAllByUserId = async (userId: string): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
  getAllByBlockId = async (blockId: string): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
  create = async (task: ITask): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
  edit = async (id: string, payload: editableFields): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
  changeStatus = async (id: string, status: string): Promise<IServiceResponse> => {
    return { error: false, data: 'DEFAULT' };
  }
}