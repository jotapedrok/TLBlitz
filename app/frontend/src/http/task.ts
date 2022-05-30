import { ITask } from '../interfaces/ITask.interface';
import { api } from '../services/api';

export async function editTask(id: string, Fields: Partial<ITask>) {
  try {
    const response = await api.patch(`/tasks/${id}`, Fields);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}

export async function getTasks(blockId: string) {
  try {
    const response = await api.get(`/tasks/${blockId}`);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}
