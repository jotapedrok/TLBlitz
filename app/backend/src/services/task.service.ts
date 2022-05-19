import { IModel } from "../interfaces/IModel.interface";
import { IServiceResponse } from "../interfaces/IServiceResponse.interface";
import { ITask } from "../interfaces/ITask.interface";
import { editableFields, ITaskService } from "../interfaces/ITaskService.interface";

export class TaskService implements ITaskService {
  constructor(
    private taskModel: IModel,
    private userModel: IModel,
    private blockModel: IModel,
    private statusModel: IModel,
  ) { };

  getAll = async (): Promise<IServiceResponse> => {
    const tasks = await this.taskModel.findAll();
    return { error: false, data: tasks };
  };

  getAllByUserId = async (userId: string): Promise<IServiceResponse> => {
    const found = await this.userModel.findByPk(userId);
    if (!found) return { error: 'User not found' };
    const tasks = await this.taskModel.findAll({ where: { createdBy: userId } });
    return { error: false, data: tasks };
  };

  getAllByBlockId = async (blockId: string): Promise<IServiceResponse> => {
    const found = await this.blockModel.findByPk(blockId);
    if (!found) return { error: 'Block not found' };
    const tasks = await this.taskModel.findAll({ where: { blockId } });
    return { error: false, data: tasks };
  };

  create = async (task: ITask): Promise<IServiceResponse> => {
    const created = await this.taskModel.create({ ...task });
    return { error: false, data: { id: created.id, ...task } };
  };

  edit = async (id: string, payload: editableFields): Promise<IServiceResponse> => {
    const found = await this.taskModel.findByPk(id);
    if (!found) return { error: 'Task not found' };
    const response = await this.taskModel.update({ ...payload }, { where: { id } });
    if (!response[0]) return { error: 'Error on Update' }
    return { error: false, data: { id } };
  };

  changeStatus = async (id: string, statusId: string): Promise<IServiceResponse> => {
    const found = await this.taskModel.findByPk(id);
    if (!found) return { error: 'Task not found' };
    const foundStatus = await this.statusModel.findByPk(statusId);
    if (!foundStatus) return { error: 'Invalid Status' };
    const response = await this.taskModel.update({ statusId }, { where: { id } });
    if (!response[0]) return { error: 'Status change was failed' };
    return { error: false, data: { message: `Status was changed to ${foundStatus.title}` } };
  };
}