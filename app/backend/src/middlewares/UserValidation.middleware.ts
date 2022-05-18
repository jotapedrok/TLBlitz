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
      if (!testEmail.test) {
        return res.status(400).json({ error: testEmail.message });
      }
      if (!testPassword.test) {
        return res.status(400).json({ error: testPassword.message });
      }
      if (!testUsername.test) {
        return res.status(400).json({ error: testUsername.message });
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