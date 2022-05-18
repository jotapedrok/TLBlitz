import { Router } from 'express';
import UserController from './controllers/user.controller';
import User from './database/models/users.model';
import FieldsValidation from './middlewares/FieldsValidation';
import { LoginValidation } from './middlewares/LoginValidation.middleware';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

const authService = new AuthService(User);
const userService = new UserService(User);
const userController = new UserController(authService, userService);

const validationLogin = new LoginValidation(FieldsValidation);

const routes = Router();

routes.post('/login', validationLogin.login, userController.login);

routes.get('/users/:id', userController.getById);
routes.get('/users', userController.getAll);
routes.post('/users', userController.create);
routes.patch('/users/:id', userController.edit);

routes.get('/blocks');
routes.get('/blocks/:userId');
routes.post('/blocks');
routes.post('/blocks/add/:userId');
routes.put('/blocks/:id');

routes.get('/tasks');
routes.get('/tasks/:blockId');
routes.post('/tasks');
routes.put('/tasks/:id');

routes.get('/status');
routes.get('/status/:blockId');
routes.post('/status');

export default routes;