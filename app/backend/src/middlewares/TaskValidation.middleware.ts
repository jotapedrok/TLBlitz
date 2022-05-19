import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class BlockValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  create: RequestHandler = (req, res, next) => {
    try {
      const { title, content, description, createdBy, statusId, blockId } = req.body;
      const testTitle = this.fieldsValidations.title(title);
      const testContent = this.fieldsValidations.content(content);
      const testDescription = this.fieldsValidations.description(description);
      const testCreatedBy = this.fieldsValidations.createdBy(createdBy);
      const testStatusId = this.fieldsValidations.statusId(statusId);
      const testBlockId = this.fieldsValidations.blockId(blockId);
      if (!testTitle.test) {
        return res.status(400).json({ error: testTitle.message });
      }
      if (!testContent.test) {
        return res.status(400).json({ error: testContent.message });
      }
      if (!testDescription.test) {
        return res.status(400).json({ error: testDescription.message });
      }
      if (!testCreatedBy.test) {
        return res.status(400).json({ error: testCreatedBy.message });
      }
      if (!testStatusId.test) {
        return res.status(400).json({ error: testStatusId.message });
      }
      if (!testBlockId.test) {
        return res.status(400).json({ error: testBlockId.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  edit: RequestHandler = (req, res, next) => {
    try {
      const { title, content, description } = req.body;
      const testTitle = this.fieldsValidations.title(title);
      const testContent = this.fieldsValidations.content(content);
      const testDescription = this.fieldsValidations.description(description);
      if (!testTitle.test) {
        return res.status(400).json({ error: testTitle.message });
      }
      if (!testContent.test) {
        return res.status(400).json({ error: testContent.message });
      }
      if (!testDescription.test) {
        return res.status(400).json({ error: testDescription.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  changeStatus: RequestHandler = (req, res, next) => {
    try {
      const { statusId } = req.body;
      const testStatusId = this.fieldsValidations.statusId(statusId);
      if (!testStatusId.test) {
        return res.status(400).json({ error: testStatusId.message });
      }
      next();
    } catch (e) {
      next(e);
    }
  };
}