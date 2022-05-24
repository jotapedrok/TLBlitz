import { api } from "../services/api";

export async function createBlock(Block: IBlock) {
  const response = await api.post('/Blocks', Block);
  return response.data;
}