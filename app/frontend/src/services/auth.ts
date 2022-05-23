import { api } from './api';

export async function auth(token: string) {
  const response = await api.post('/user/auth', { token });
  if (response.status !== 200) {
    return false;
  }
  return true;
}
