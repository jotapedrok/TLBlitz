import { Router } from 'express';

const routes = Router();

routes.post('/login');

routes.get('/users/:id');
routes.get('/users');
routes.post('/users');
routes.put('/users/:id');

export default routes;