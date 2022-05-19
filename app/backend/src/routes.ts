import { Router } from 'express';
import { BlockController } from './controllers/block.controller';
import UserController from './controllers/user.controller';
import Block from './database/models/blocks.model';
import User from './database/models/users.model';
import UserBlocks from './database/models/usersBlocks.model';
import { BlockValidation } from './middlewares/BlockValidation.middleware';
import FieldsValidation from './middlewares/FieldsValidation';
import { LoginValidation } from './middlewares/LoginValidation.middleware';
import { UserValidation } from './middlewares/UserValidation.middleware';
import { AuthService } from './services/auth.service';
import { BlockService } from './services/block.service';
import { UserService } from './services/user.service';

const authService = new AuthService(User);
const userService = new UserService(User);
const blockService = new BlockService(Block, User, UserBlocks);

const userController = new UserController(authService, userService);
const blockController = new BlockController(blockService);

const loginValidations = new LoginValidation(FieldsValidation);
const userValidations = new UserValidation(FieldsValidation);
const blockValidations = new BlockValidation(FieldsValidation);

const routes = Router();

routes.post('/login', loginValidations.login, userController.login);

routes.get('/users/:id', userController.getById);
routes.get('/users', userController.getAll);
routes.post('/users', userValidations.create, userController.create);
routes.patch('/users/:id', userValidations.update, userController.edit);

routes.get('/blocks/:userId', blockController.getAllByUserId);
routes.get('/blocks', blockController.getAll);
routes.post('/blocks/add/:userId/:blockId', blockValidations.addUser, blockController.addUser);
routes.post('/blocks', blockValidations.create, blockController.create);
routes.patch('/blocks/edit/:userId/:blockId', blockValidations.editUser, blockController.editUser);
routes.patch('/blocks/delete/:userId/:blockId', blockController.deleteUser);
routes.patch('/blocks/:id', blockValidations.edit, blockController.edit);

routes.get('/tasks');
routes.get('/tasks/:blockId');
routes.post('/tasks');
routes.put('/tasks/:id');

routes.get('/status');
routes.get('/status/:blockId');
routes.post('/status');

export default routes;