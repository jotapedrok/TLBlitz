import { RequestHandler } from "express";

class Validation {
  login: RequestHandler = (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || email === '') {
        return res.status(400).json({ error: 'Email is required' });
      }
      if (!password || password === '') {
        return res.status(400).json({ error: 'Password is required' });
      }
      if (password.length < 6) {
        return res.status(400).json({ error: 'Password minimum length is 6 characters' });
      }
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}

export default new Validation();