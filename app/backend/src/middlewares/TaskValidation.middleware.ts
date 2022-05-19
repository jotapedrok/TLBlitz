import { RequestHandler } from "express";
import { IFieldsValidations } from "../interfaces/IFieldsValidation.interface";

export class BlockValidation {
  constructor(private fieldsValidations: IFieldsValidations) { };

  create: RequestHandler = (req, res, next) => { };
  edit: RequestHandler = (req, res, next) => { };
  changeStatus: RequestHandler = (req, res, next) => { };
}