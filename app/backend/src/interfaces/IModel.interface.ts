import { Model } from "sequelize/types";

export interface Entity {
  id?: string,
}

export interface IModel extends Model {
}