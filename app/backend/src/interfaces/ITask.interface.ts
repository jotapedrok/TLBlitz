export interface ITask {
  id?: string;
  title: string;
  description?: string;
  content?: string;
  createdBy: string;
  blockId: string;
  statusId?: string;
}