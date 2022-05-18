import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class LoginValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  login: RequestHandler = (req, res, next) => {
    try {
      const { email, password } = req.body;
      const testEmail = this.fieldsValidations.email(email);
      const testPassword = this.fieldsValidations.password(password);
      if (!testEmail.test) {
        return res.status(400).json({ error: testEmail.message });
      }
      if (!testPassword.test) {
        return res.status(400).json({ error: testPassword.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  }

}
