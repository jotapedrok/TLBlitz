import { IUser } from '../interfaces/IUser.interface';
import { api } from '../services/api';

export async function createUser(user: IUser) {
  const response = await api.post('/users', user);
  return response.data;
}

export async function loginHttp(email: string, password: string) {
  const response = await api.post('/login', { email, password });
  return response.data;
}
