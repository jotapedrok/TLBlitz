import { RequestHandler } from "express";
import { ITaskService } from "../interfaces/ITaskService.interface";

export class TaskController {
  constructor(private taskService: ITaskService) { };

  private setError(error: string): number {
    switch (error) {
      default:
        return 500
    }
  };

  getAll: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  getAllByUserId: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  getAllByBlockId: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  create: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  edit: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };

  changeStatus: RequestHandler = (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  };
}