import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';
import errMiddleware from './middlewares/err.middleware';

class App {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.err();
  }

  private routes(): void {
    this.app.use('/api', routes);
  }

  private err(): void {
    this.app.use(errMiddleware.index);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log('App listen on port:', PORT));
  }
}

export { App };

export const { app } = new App();
