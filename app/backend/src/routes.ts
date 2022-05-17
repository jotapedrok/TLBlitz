import { Router } from 'express';

const routes = Router();

routes.post('/login');

routes.get('/users/:id');
routes.get('/users');
routes.post('/users');
routes.put('/users/:id');

routes.get('/blocks');
routes.get('/blocks/:userId');
routes.post('/blocks');
routes.post('/blocks/add/:userId');
routes.put('/blocks/:id');


export default routes;