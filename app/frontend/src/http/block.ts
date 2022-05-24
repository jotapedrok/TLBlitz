import { IBlock } from '../interfaces/IBlock.interface';
import { api } from '../services/api';

export async function createBlock(Block: IBlock) {
  const response = await api.post('/blocks', Block);
  return response.data;
}
