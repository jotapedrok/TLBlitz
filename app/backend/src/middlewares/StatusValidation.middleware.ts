import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class StatusValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  create: RequestHandler = (req, res, next) => {
    try {
      const { title, priority, createdBy, blockId } = req.body;
      const testTitle = this.fieldsValidations.title(title);
      const testPriority = this.fieldsValidations.priority(priority);
      const testCreatedBy = this.fieldsValidations.createdBy(createdBy);
      const testBlockId = this.fieldsValidations.blockId(blockId);
      const testes = [testTitle, testPriority, testCreatedBy, testBlockId];
      const restult = testes.find((teste) => !teste.test);
      if (restult) {
        return res.status(400).json({ error: restult.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };
}