import { IUser } from "./IUser.interface";

export interface ILoginService {
  genToken(payload: IUser): string;
  authorization(payload: IUser): boolean;
  authentification(token: string): boolean;
}
