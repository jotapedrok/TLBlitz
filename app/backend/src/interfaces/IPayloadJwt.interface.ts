import { JwtPayload } from "jsonwebtoken";

export interface IPayloadJwt extends JwtPayload {
  data: any;
}