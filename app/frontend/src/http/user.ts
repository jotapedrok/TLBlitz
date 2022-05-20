import { api } from "../services/api";

export async function loginHttp(email: string, password: string) {
  const response = await api.post('/login', { email, password });
  return response.data;
}