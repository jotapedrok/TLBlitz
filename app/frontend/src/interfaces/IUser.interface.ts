export interface IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: string;
  deleted: boolean;
  deletedAt?: number;
}
