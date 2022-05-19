import { Router } from 'express';
import { BlockController } from './controllers/block.controller';
import { StatusController } from './controllers/status.controller';
import { TaskController } from './controllers/task.controller';
import UserController from './controllers/user.controller';
import Block from './database/models/blocks.model';
import Status from './database/models/status.model';
import Task from './database/models/task.model';
import User from './database/models/users.model';
import UserBlocks from './database/models/usersBlocks.model';
import { BlockValidation } from './middlewares/BlockValidation.middleware';
import FieldsValidation from './middlewares/FieldsValidation';
import { LoginValidation } from './middlewares/LoginValidation.middleware';
import { StatusValidation } from './middlewares/StatusValidation.middleware';
import { TaskValidation } from './middlewares/TaskValidation.middleware';
import { UserValidation } from './middlewares/UserValidation.middleware';
import { AuthService } from './services/auth.service';
import { BlockService } from './services/block.service';
import { StatusService } from './services/status.service';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';

const authService = new AuthService(User);
const userService = new UserService(User);
const blockService = new BlockService(Block, User, UserBlocks);
const taskService = new TaskService(Task, User, Block, Status);
const statusService = new StatusService(Status, Block);

const userController = new UserController(authService, userService);
const blockController = new BlockController(blockService);
const taskController = new TaskController(taskService);
const statusController = new StatusController(statusService);

const loginValidations = new LoginValidation(FieldsValidation);
const userValidations = new UserValidation(FieldsValidation);
const blockValidations = new BlockValidation(FieldsValidation);
const taskValidations = new TaskValidation(FieldsValidation);
const statusValidations = new StatusValidation(FieldsValidation);

const routes = Router();
const userRoutes = Router();
const adminRoutes = Router();

routes.post('/login', loginValidations.login, userController.login);
routes.post('/users', userValidations.create, userController.create);

routes.use(adminRoutes);
routes.use(userRoutes);

userRoutes.get('/users/:id', userController.getById);
adminRoutes.get('/users', userController.getAll);
userRoutes.patch('/users/:id', userValidations.update, userController.edit);

userRoutes.get('/blocks/:userId', blockController.getAllByUserId);
adminRoutes.get('/blocks', blockController.getAll);
userRoutes.post('/blocks/add-user/:userId/:blockId', blockValidations.addUser, blockController.addUser);
userRoutes.post('/blocks', blockValidations.create, blockController.create);
userRoutes.patch('/blocks/edit-user/:userId/:blockId', blockValidations.editUser, blockController.editUser);
userRoutes.delete('/blocks/delete-user/:userId/:blockId', blockController.deleteUser);
userRoutes.patch('/blocks/:id', blockValidations.edit, blockController.edit);

adminRoutes.get('/tasks', taskController.getAll);
adminRoutes.get('/tasks/:userId', taskController.getAllByUserId);
userRoutes.get('/tasks/:blockId', taskController.getAllByBlockId);
userRoutes.post('/tasks', taskValidations.create, taskController.create);
userRoutes.patch('/tasks/:id', taskValidations.edit, taskController.edit);
userRoutes.patch('/tasks/status/:id', taskValidations.changeStatus, taskController.changeStatus);


userRoutes.get('/status', statusController.getAll);
userRoutes.get('/status/:blockId', statusController.getAllByBlockId);
userRoutes.post('/status', statusValidations.create, statusController.create);
userRoutes.delete('/status/:id', statusController.delete);

export default routes;