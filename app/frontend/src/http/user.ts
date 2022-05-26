import { IUser } from '../interfaces/IUser.interface';
import { api } from '../services/api';

export async function createUser(user: IUser) {
  try {
    const response = await api.post('/users', user);
    return response.data;
  } catch (e) {
    return { error: e };
  }
}

export async function loginHttp(email: string, password: string) {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (e) {
    return { error: e };
  }
}
