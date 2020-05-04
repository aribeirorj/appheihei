import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  return response.json({ message: 'users' });
});

usersRoutes.get('/', (request, response) => {
  return response.json({ message: 'users' });
});

export default usersRoutes;
