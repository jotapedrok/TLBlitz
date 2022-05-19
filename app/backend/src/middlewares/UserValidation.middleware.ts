import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class UserValidation {
  constructor(private fieldsValidations: IFieldsValidations) { }
  create: RequestHandler = (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      const testEmail = this.fieldsValidations.email(email);
      const testPassword = this.fieldsValidations.password(password);
      const testUsername = this.fieldsValidations.username(username);
      const testes = [testEmail, testPassword, testUsername];
      const restult = testes.find((teste) => !teste.test);
      if (restult) {
        return res.status(400).json({ error: restult.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  update: RequestHandler = (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      if (!email && !username && !password) {
        return res.status(400).json({ error: 'Invalid Fields' });
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}