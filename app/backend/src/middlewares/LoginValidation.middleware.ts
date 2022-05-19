import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class LoginValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  login: RequestHandler = (req, res, next) => {
    try {
      const { email, password } = req.body;
      const testEmail = this.fieldsValidations.email(email);
      const testPassword = this.fieldsValidations.password(password);
      const testes = [testEmail, testPassword];
      const restult = testes.find((teste) => !teste.test);
      if (restult) {
        return res.status(400).json({ error: restult.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  }

}
