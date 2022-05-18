import { ErrorRequestHandler } from "express";

class err {
  index: ErrorRequestHandler = (err, _req, res, _next) => {
    return res.status(500).json({ Error: `${err.message}` });
  }
}

export default new err();
