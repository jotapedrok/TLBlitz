import { ITask } from '../interfaces/ITask.interface';
import { api } from '../services/api';

export async function editTask(id: string, Fields: Partial<ITask>) {
  try {
    const response = await api.patch(`/blocks/${id}`, Fields);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}
