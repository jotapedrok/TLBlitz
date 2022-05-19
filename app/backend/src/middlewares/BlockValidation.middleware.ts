import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class BlockValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  create: RequestHandler = (req, res, next) => {
    try {
      const { name, createdBy, thumbnail } = req.body;
      const testName = this.fieldsValidations.name(name);
      const testCreatedBy = this.fieldsValidations.createdBy(createdBy);
      const testThumbnail = this.fieldsValidations.thumbnail(thumbnail);
      const testes = [testName, testCreatedBy, testThumbnail];
      const restult = testes.find((teste) => !teste.test);
      if (restult) {
        return res.status(400).json({ error: restult.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  addUser: RequestHandler = (req, res, next) => {
    try {
      const { access } = req.body;
      const testAccess = this.fieldsValidations.access(access);
      if (!testAccess.test) {
        return res.status(400).json({ error: testAccess.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  editUser: RequestHandler = (req, res, next) => {
    try {
      const { access } = req.body;
      const testAccess = this.fieldsValidations.access(access);
      if (!testAccess.test) {
        return res.status(400).json({ error: testAccess.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  edit: RequestHandler = (req, res, next) => {
    try {
      const { name, createdBy, thumbnail } = req.body;
      if (!name && !createdBy && !thumbnail) {
        return res.status(400).json({ error: 'Need to send something to update' });
      }
      if (name) {
        const testName = this.fieldsValidations.name(name);
        if (!testName.test) return res.status(400).json({ erro: testName.message });
      }
      if (createdBy) {
        const testCreatedBy = this.fieldsValidations.createdBy(createdBy);
        if (!testCreatedBy.test) return res.status(400).json({ erro: testCreatedBy.message });
      }
      if (thumbnail) {
        const testThumbnail = this.fieldsValidations.thumbnail(thumbnail);
        if (!testThumbnail.test) return res.status(400).json({ erro: testThumbnail.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };
}