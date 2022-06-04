import { api } from '../services/api';

export const getStatus = async () => {
  try {
    const response = await api.get('/status');
    return response.data;
  } catch (e) {
    return { error: e };
  }
};
