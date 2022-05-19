import { IServiceResponse } from "./IServiceResponse.interface";
import { ITask } from "./ITask.interface";

export interface editableFields {
  title?: string;
  content?: string;
  description?: string;
}


export interface ITaskService {
  getAll(): Promise<IServiceResponse>;
  getAllByUserId(userId: string): Promise<IServiceResponse>;
  getAllByBlockId(blockId: string): Promise<IServiceResponse>;
  create(task: ITask): Promise<IServiceResponse>;
  edit(id: string, payload: editableFields): Promise<IServiceResponse>;
  changeStatus(id: string, status: string): Promise<IServiceResponse>;
}