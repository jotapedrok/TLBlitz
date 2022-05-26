import { IBlock } from '../interfaces/IBlock.interface';
import { api } from '../services/api';

export async function createBlock(Block: IBlock) {
  try {
    const response = await api.post('/blocks', Block);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}

export async function deleteBlock(id: string) {
  try {
    const response = await api.delete(`/blocks/${id}`);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}

export async function removeUser(userId: string, blockId: string) {
  try {
    const response = await api.delete(
      `/blocks/delete-user/${userId}/${blockId}`,
    );
    return response.data;
  } catch (e) {
    return { error: e };
  }
}
