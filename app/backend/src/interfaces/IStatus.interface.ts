export interface IStatus {
  id?: string;
  title: string;
  priority: number;
  createdBy: string;
  blockId?: string;
}